#!/usr/bin/env python3
import asyncio
from typing import List
from basic_async_syntax import wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    delays = []
    for _ in range(n):
        delays.append(await wait_random(max_delay))
    return sorted(delays)