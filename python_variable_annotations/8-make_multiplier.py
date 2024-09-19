#!/usr/bin/env python3
""" Module with a function that returns a function that multiplies its input by a given multiplier. """
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Returns a function that multiplies its input by the given multiplier.
    """
    def multiplier_function(value: float) -> float:
        return value * multiplier
    
    return multiplier_function
