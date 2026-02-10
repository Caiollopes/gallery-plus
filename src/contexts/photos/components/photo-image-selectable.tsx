import { tv } from "tailwind-variants";
import ImagePreview from "../../../components/image-preview";
import InputCheckbox from "../../../components/input-checkbox";
import React from "react";

export const PhotoImageSelectableVariants = tv({
  base: "cursor-pointer relative rounded-lg",
  variants: {
    select: {
      true: "outline-2 outline-accent-brand",
    },
  },
});

interface PhotoImageSelectableProps extends React.ComponentProps<
  typeof ImagePreview
> {
  selected?: boolean;
  onSelectImage?: (selected: boolean) => void;
}

export default function PhotoImageSelectable({
  selected,
  className,
  onSelectImage, // Ensure this is destructured from props
  ...props
}: PhotoImageSelectableProps) {
  const [isSelected, setIsSelected] = React.useState(selected);

  function handleSelect() {
    const newValue = !isSelected;

    setIsSelected(newValue);
    onSelectImage?.(newValue);
  }

  return (
    <label
      className={PhotoImageSelectableVariants({
        className,
        select: isSelected, // Fix typo from 'select' to 'slect'
      })}
    >
      <InputCheckbox
        size="sm"
        defaultChecked={isSelected}
        onChange={handleSelect}
        className="absolute top-1 left-1"
      />
      <ImagePreview {...props} />
    </label>
  );
}
