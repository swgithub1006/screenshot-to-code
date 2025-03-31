import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "../ui/select";
import { Badge } from "../ui/badge";
import { CodeGenerationModel, CODE_GENERATION_MODEL_DESCRIPTIONS } from "../../lib/models";

interface Props {
  model: CodeGenerationModel | undefined;
  setModel: (config: CodeGenerationModel) => void;
  label?: string;
  shouldDisableUpdates?: boolean;
}

function ModelsSettingSection({
  model,
  setModel,
  label = "选择llm模型:",
  shouldDisableUpdates = false,
}: Props) {
  return (
    <div className="flex flex-col gap-y-2 justify-between text-sm">
      <div className="grid grid-cols-3 items-center gap-4">
        <span>{label}</span>
        <Select
          value={model}
          onValueChange={(value: string) => setModel(value as CodeGenerationModel)}
          disabled={shouldDisableUpdates}
        >
          <SelectTrigger className="col-span-2" id="model-settings-js">
            {model ? CODE_GENERATION_MODEL_DESCRIPTIONS[model].name : "Select a model"}
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {Object.values(CodeGenerationModel).map((model) => (
                <SelectItem key={model} value={model}>
                  <div className="flex items-center">
                    <span>{CODE_GENERATION_MODEL_DESCRIPTIONS[model].name}</span>
                    {CODE_GENERATION_MODEL_DESCRIPTIONS[model].inBeta && (
                      <Badge className="ml-2" variant="secondary">
                        Beta
                      </Badge>
                    )}
                  </div>
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default ModelsSettingSection;
