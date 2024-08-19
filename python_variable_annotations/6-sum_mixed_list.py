#!/usr/bin/env python3
""" Module to calculate the sum of all numbers in a list which may contain both integers and floats. """
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Calculates the sum of all numbers in a list which may contain both integers and floats.
    """
    return sum(mxd_lst)
