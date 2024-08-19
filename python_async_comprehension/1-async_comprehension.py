#!/usr/bin/env python3
'''Async Comprehensions'''
from typing import List
Vector = List[float]

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> Vector:
    ''' Collect 10 random numbers using an async comprehensing over async_generator '''
    Final = [y async for y in async_generator()]
    return Final