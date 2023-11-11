class SpareParts:
    def __init__(self):
        self.parts = []

    def add_part(self, part):
        self.parts.append(part)

    def __iter__(self):
        return SparePartsIterator(self)

class SparePartsIterator:
    def __init__(self, spare_parts):
        self.spare_parts = spare_parts
        self.index = 0

    def __iter__(self):
        return self

    def __next__(self):
        if self.index < len(self.spare_parts.parts):
            part = self.spare_parts.parts[self.index]
            self.index += 1
            return part
        else:
            raise StopIteration

def main():
    spare_parts_collection = SpareParts()

    spare_parts_collection.add_part("Engine")
    spare_parts_collection.add_part("Tire")
    spare_parts_collection.add_part("Brake Pad")

    iterator = iter(spare_parts_collection)
    for part in iterator:
        print(f"Spare Part: {part}")

if __name__ == "__main__":
    main()
