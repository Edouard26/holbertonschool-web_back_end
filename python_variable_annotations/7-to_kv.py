#!/usr/bin/env python3
""" Module to convert a number to a key-value pair. """
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Returns a tuple containing the key and the square of a number.
    """
    return (k, float(v ** 2))
