#!/usr/bin/env python3
""" Async Generator """
import asyncio
import random


async def async_generator():
    """ Coroutine that loops 10 times, each time asynchronously wait 1 second,"""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
