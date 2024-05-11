import { Input } from "../ui/input";
import { Label } from "../ui/label";

type Props = {
  opacity: number;
  handleInputChange: (property: string, value: string) => void;
};

const Opacity = ({ opacity, handleInputChange }: Props) => (
  <div className="flex flex-col gap-3 border-b border-primary-grey-200 p-5">
    <h3 className="text-[10px] uppercase">Opacity</h3>
    <Label className="flex h-6 w-14 items-center justify-center bg-primary-grey-100 text-[10px] leading-3">
      <Input
        type="number"
        className="input-ring p-1"
        width={300}
        placeholder="100"
        max={100}
        min={0}
        step={1}
        value={opacity * 100}
        onChange={(e) =>
          handleInputChange(`opacity`, (+e.target.value / 100).toString())
        }
      />
      %
    </Label>
  </div>
);

export default Opacity;
