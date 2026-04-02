import time

dataLocation = "2025/1-day/data.txt"
value = 50
numberOfZeroes = 0

content = open(dataLocation)

start = time.perf_counter()
splitRecords = content.read().split()

actions = [(a[0], int(a[1:])) for a in content.read().split()]

for direction, steps in actions:
    if direction == "L":
        value = (value - steps) % 100
    else:
        value = (value + steps) % 100
        
    if value == 0:
        numberOfZeroes += 1
    
print(numberOfZeroes)
end = time.perf_counter()
print(f"{(end - start) * 1000:.2f} ms")