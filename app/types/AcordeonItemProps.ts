interface AccordionItemProps {
    index: number;
    divisionName: string;
    ranks: Rank[];
    isActive: boolean;
    onClick: (index: number) => void;
  }