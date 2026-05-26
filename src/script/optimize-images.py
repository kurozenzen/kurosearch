"""Optimize bundled asset images for the app.

The script scans the four asset folders under ``src/lib/assets`` and writes
WebP thumbnails to the matching ``src/lib/assets/build`` folders.
"""

from __future__ import annotations

from pathlib import Path
from typing import Iterable

from PIL import Image, ImageOps


TARGET_HEIGHT = 256
IMAGE_EXTENSIONS = {".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp", ".tif", ".tiff"}
FOLDERS = ("categories", "characters", "franchises", "pairings")


def repo_root() -> Path:
	return Path(__file__).resolve().parents[2]


def source_dir(name: str) -> Path:
	return repo_root() / "src" / "lib" / "assets" / name


def target_dir(name: str) -> Path:
	return repo_root() / "src" / "lib" / "assets" / "build" / name


def iter_image_files(folder: Path) -> Iterable[Path]:
	for path in sorted(folder.rglob("*")):
		if path.is_file() and path.suffix.lower() in IMAGE_EXTENSIONS:
			yield path


def resize_to_height(image: Image.Image, height: int) -> Image.Image:
	if image.height <= 0:
		raise ValueError("Image height must be greater than zero")

	if image.height <= height:
		return image.copy()

	width = round(image.width * (height / image.height))
	resampling = getattr(Image, "Resampling", Image).LANCZOS
	return image.resize((width, height), resampling)


def optimize_image(source_path: Path, target_path: Path) -> None:
	with Image.open(source_path) as image:
		image = ImageOps.exif_transpose(image)
		image = resize_to_height(image, TARGET_HEIGHT)

		if image.mode not in {"RGB", "RGBA"}:
			if "A" in image.getbands():
				image = image.convert("RGBA")
			else:
				image = image.convert("RGB")

		target_path.parent.mkdir(parents=True, exist_ok=True)
		image.save(
			target_path.with_suffix(".webp"),
			format="WEBP",
			quality=84,
			method=6,
			exact=True,
		)


def optimize_folder(folder_name: str) -> int:
	source = source_dir(folder_name)
	target = target_dir(folder_name)

	if not source.exists():
		return 0

	processed = 0
	for source_path in iter_image_files(source):
		relative_path = source_path.relative_to(source).with_suffix(".webp")
		target_path = target / relative_path
		optimize_image(source_path, target_path)
		processed += 1

	return processed


def main() -> int:
	total = 0
	for folder_name in FOLDERS:
		total += optimize_folder(folder_name)

	print(f"Optimized {total} image(s) into WebP thumbnails.")
	return 0


if __name__ == "__main__":
	raise SystemExit(main())
