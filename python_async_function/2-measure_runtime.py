#!/usr/bin/env python3

"""Measure the runtime"""
import asyncio
import time

wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """ Measures the total execution time for wait_n """
   first = time.perf_counter()
    asyncio.run(wait_n(n, max_delay))
    finish = time.perf_counter()
    total_time = finish - first
    return total_time / n