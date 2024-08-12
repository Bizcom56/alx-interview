#!/usr/bin/python3
""" Minimum Operations  """


def minOperations(n: int) -> int:
    if n <= 1:
        return 0

    clip = 0
    ops = 0
    char_len = 1

    while char_len < n:
        if n % char_len == 0:
            ops += 1
            clip = char_len
        char_len += clip
        ops += 1
    return ops
