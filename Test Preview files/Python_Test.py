"""raspberryCandy — Python styling test."""
from dataclasses import dataclass
from typing import Optional

API_URL = "https://api.example.com/v1"
MAX_RETRIES = 3


@dataclass
class Candy:
    name: str
    price: float = 0.0

    def label(self) -> str:
        # f-string + conditional
        tag = f"{self.name}: ${self.price:.2f}"
        return tag if self.price > 0 else "free"


def make_store(names: list[str]) -> Optional[list[Candy]]:
    store = [Candy(n, price=1.5) for n in names]
    for candy in store:
        print(candy.label())
    return store or None


if __name__ == "__main__":
    make_store(["gummy", "sherbet", "raspberry"])
