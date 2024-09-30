#!/bin/bash

human_readable() {
    local size=$1
    local units=('B' 'KB' 'MB' 'GB' 'TB')
    local unit_index=0

    while ((size > 1024 && unit_index < ${#units[@]} - 1))
    do
        size=$(echo "scale=2; $size / 1024" | bc)
        ((unit_index++))
    done

    echo "$size ${units[$unit_index]}"
}

if [ ! -f package.json ]; then
    echo "Error: package.json not found. Please run this script from the project root."
    exit 1
fi

echo "Building the package..."
npm run build

temp_dir=$(mktemp -d)

echo "Packing the package..."
npm pack --pack-destination "$temp_dir"

packed_file=$(ls "$temp_dir"/*.tgz)

size_bytes=$(wc -c < "$packed_file")
size_human=$(human_readable $size_bytes)

echo "Package size: $size_human"

dist_size_bytes=$(du -sb dist | cut -f1)
dist_size_human=$(human_readable $dist_size_bytes)

echo "Dist folder size: $dist_size_human"

rm -rf "$temp_dir"

echo "Package contents:"
tar -tvf "$packed_file" | awk '{print $6}' | sed 's/^package\///'

if command -v source-map-explorer &> /dev/null; then
    echo "Analyzing bundle..."
    source-map-explorer dist/index.js
else
    echo "source-map-explorer not found. Install it globally with 'npm install -g source-map-explorer' for bundle analysis."
fi