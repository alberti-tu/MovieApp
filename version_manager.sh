#!/bin/bash
if [ $# -ne 2 ]; then
  echo "Execute: $0 <minimum_version> <current_version>"
  exit 1
fi

minimum_version=$1
current_version=$2

IFS='.' read -ra arr_minimum <<< "$minimum_version"
IFS='.' read -ra arr_current <<< "$current_version"

for i in "${!arr_minimum[@]}"; do
  if [ "${arr_minimum[$i]}" -gt "${arr_current[$i]}" ]; then
    echo "$minimum_version"
    exit 0
  elif [ "${arr_minimum[$i]}" -lt "${arr_current[$i]}" ]; then
    break
  fi
done

last_index=$(( ${#arr_current[@]} - 1 ))
arr_current[$last_index]=$(( ${arr_current[$last_index]} + 1 ))

new_version="${arr_current[0]}"
for (( i=1; i<=$last_index; i++ )); do
  new_version="${new_version}.${arr_current[$i]}"
done

echo "$new_version"
exit 0