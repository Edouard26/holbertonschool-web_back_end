#!/usr/bin/env python3
""" Module to demonstrate the basic syntax of an asynchronous function. """

import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:

    """ Asynchronous function that waits for a random delay. """
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)

    return delay
