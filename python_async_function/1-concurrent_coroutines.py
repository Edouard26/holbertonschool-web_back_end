#!/usr/bin/env python3
""""1. Let's execute multiple coroutines at the same time with async"""
import asyncio
import random
from typing import List


wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """ Returns the list of all the delays in ascending order. """
    l = [asyncio.create_task(wait_random(max_delay)) for i in range(n)]
    finish = [await task for task in asyncio.as_completed(l)]
    return finish