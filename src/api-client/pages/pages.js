import { isValidSortProperty } from "../../posts/sort/sort";
import { SearchableTag } from "../../tags/SearchableTag";
import { fetchAbortPrevious } from "../fetchAbortPrevious";

/**
 * @typedef {import("../../posts/sort/sort").SortProperty} SortProperty
 */

const PAGE_SIZE = 20;
const BASE_URL = "https://r34-json.herokuapp.com/v2";

/**
 * @type {AbortController | null}
 */
let getPageAbortController = null;

export const getPage = async (pageNumber, tags, sortProperty, minScore) => {
  if (!isValidPageNumber(pageNumber)) {
    throw new TypeError("Invalid pageNumber passed to getPage");
  }

  if (!isValidTagsArray(tags)) {
    throw new TypeError("Invalid array of tags passed to getPage");
  }

  if (!isValidSortProperty(sortProperty)) {
    throw new TypeError("Invalid sort property passed to getPage");
  }

  if (!isValidMinScore(minScore)) {
    throw new TypeError("Invalid minimum score passed to getPage");
  }

  const response = await fetchAbortPrevious(
    getPostsUrl(pageNumber, serializeTags(tags, sortProperty, minScore)),
    getPageAbortController
  );

  if (!response.ok) {
    throw new Error(`getPage failed with http status ${response.status}`);
  }

  /** @type {import("../../types/post").Page}*/
  const json = await response.json();

  return json;
};

export const isValidPageNumber = (value) => {
  return typeof value === "number" && value >= 0;
};

export const isValidTagsArray = (value) => {
  return (
    Array.isArray(value) &&
    (value.length === 0 || value.every((t) => t instanceof SearchableTag))
  );
};

export const isValidMinScore = (value) => {
  return typeof value === "number" && value >= 0;
};
/**
 * @param {SearchableTag[]} tags
 * @param {SortProperty} sortProperty
 * @param {number} minScore
 */
export const serializeTags = (tags, sortProperty, minScore) => {
  const groupedTags = tags.reduce(
    (result, t) => {
      if (t.modifier === "~") {
        result.optional.push(t);
      } else {
        result.other.push(t);
      }
      return result;
    },
    { optional: [], other: [] }
  );

  const tagsString = [
    ...groupedTags.other.map((t) => t.serialize()),
    `sort:${sortProperty}:desc`,
    `score:>=${minScore}`,
  ].join("+");

  return groupedTags.optional.length == 0
    ? tagsString
    : `${tagsString}+( ${groupedTags.optional
        .map((t) => t.serialize())
        .join(" ~ ")} )`;
};

/**
 * @param {number} pageNumber
 * @param {string} serializedTags
 */
export const getPostsUrl = (pageNumber, serializedTags) => {
  const url = `${BASE_URL}/posts?limit=${PAGE_SIZE}&pid=${pageNumber}`;

  return serializedTags === "" ? url : `${url}&tags=${serializedTags}`;
};
