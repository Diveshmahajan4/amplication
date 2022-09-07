import {
  SelectMenu,
  SelectMenuItem,
  SelectMenuList,
  SelectMenuModal,
} from "@amplication/design-system";
import React from "react";
import { EnumMessagePatternConnectionOptions } from "../../models";
import "./ServiceTopicPatternMenu.scss";

type Props = {
  onMessagePatternTypeChange: (
    pattern: EnumMessagePatternConnectionOptions
  ) => void;
  selectedPatternType: EnumMessagePatternConnectionOptions;
};
const CLASS_NAME = "service-topic-pattern-menu";
export default function ServiceTopicPatternMenu({
  onMessagePatternTypeChange,
  selectedPatternType,
}: Props) {
  return (
    <div>
      <div>
        <span className={`${CLASS_NAME}__label`}>Message pattern</span>
      </div>
      <SelectMenu title={selectedPatternType}>
        <SelectMenuModal>
          <SelectMenuList>
            <>
              {Object.keys(EnumMessagePatternConnectionOptions).map(
                (connectionOption, i) => (
                  <SelectMenuItem
                    closeAfterSelectionChange
                    selected={selectedPatternType === connectionOption}
                    key={i}
                    onSelectionChange={() => {
                      onMessagePatternTypeChange(
                        connectionOption as EnumMessagePatternConnectionOptions
                      );
                    }}
                  >
                    {connectionOption}
                  </SelectMenuItem>
                )
              )}
            </>
          </SelectMenuList>
        </SelectMenuModal>
      </SelectMenu>
    </div>
  );
}
