import {
  Portal,
  SelectContent,
  SelectContext,
  SelectControl,
  SelectHiddenSelect,
  SelectIndicator,
  SelectItem,
  SelectItemText,
  SelectPositioner,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@ark-ui/react";
import { POKEMON_DATA } from "../../constants/data";
import { ChevronDown } from "lucide-react";
import { Pokemon } from "../../types";

const Select = () => {
  return (
    <SelectRoot
      items={POKEMON_DATA}
      positioning={{
        sameWidth: true,
        placement: "bottom-start",
        gutter: 10,
      }}
      itemToValue={(item) => item.name}
      itemToString={(item) => item.name}
      onValueChange={(value) => console.log(value)}
    >
      <SelectControl>
        <SelectTrigger className="flex items-center w-[250px] justify-between border px-3 h-9 bg-neutral-5 border-neutral-20 text-sm rounded-md">
          <SelectContext<Pokemon>>
            {({ value }) => {
              return (
                <SelectValueText
                  placeholder="Select a Pokemon"
                  className="capitalize"
                >
                  {value.length > 1
                    ? `${value.length} items selected`
                    : value[0]}
                </SelectValueText>
              );
            }}
          </SelectContext>

          <SelectIndicator>
            <ChevronDown size={16} />
          </SelectIndicator>
        </SelectTrigger>
      </SelectControl>
      <Portal>
        <SelectPositioner>
          <SelectContent className="max-h-[250px] overflow-auto bg-white  shadow-[0px_0px_24px_0px_#0000001A] rounded-lg outline-none">
            {POKEMON_DATA.map((pokemon) => (
              <SelectItem
                key={pokemon.name}
                item={pokemon}
                className="py-2 px-4 text-xs capitalize data-[highlighted]:bg-neutral-5 aria-selected:text-tertiary-violet-50 aria-selected:bg-neutral-5 aria-selected:font-semibold"
              >
                <SelectItemText>{pokemon.name}</SelectItemText>
              </SelectItem>
            ))}
          </SelectContent>
        </SelectPositioner>
        <SelectHiddenSelect />
      </Portal>
    </SelectRoot>
  );
};

export default Select;
