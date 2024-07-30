#!/usr/bin/python3
"""This method checks if all the boxes can be opened."""


def canUnlockAll(boxes):
    if not isinstance(boxes, list):
        return False

    if len(boxes) == 0:
        return False

    keys = [0]
    for i in keys:
        for j in boxes[i]:
            if j not in keys and j != i and j < len(boxes) and j != 0:
                keys.append(j)

    if len(keys) == len(boxes):
        return True
    else:
        return False
