import { Label } from "../ui/label";

type Props = {
  inputRef: any;
  attribute: string;
  placeholder: string;
  attributeType: string;
  handleInputChange: (property: string, value: string) => void;
};

const Color = ({
  inputRef,
  attribute,
  placeholder,
  attributeType,
  handleInputChange,
}: Props) => (
  <div className="flex flex-col gap-3 border-b border-primary-grey-200 p-5">
    <h3 className="text-[10px] uppercase">{placeholder}</h3>
    <div className="flex item-center gap-2 border border-primary-grey-200">
      <div
        className="flex flex-1 items-center gap-2"
        onClick={() => inputRef.current.click()}
      >
        <input
          type="color"
          value={attribute}
          ref={inputRef}
          onChange={(e) => handleInputChange(attributeType, e.target.value)}
        />
        <Label className="flex-1">{attribute}</Label>
      </div>
    </div>
  </div>
);

export default Color;
