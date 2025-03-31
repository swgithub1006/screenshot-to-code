import React from "react";
import { useAppStore } from "../../store/app-store";
import { AppState, Settings } from "../../types";
import OutputSettingsSection from "./OutputSettingsSection";
import ModelsSettingSection from "./ModelsSettingSection";
import { Stack } from "../../lib/stacks";
import { CodeGenerationModel } from "../../lib/models";

interface GenerationSettingsProps {
  settings: Settings;
  setSettings: React.Dispatch<React.SetStateAction<Settings>>;
}

export const GenerationSettings: React.FC<GenerationSettingsProps> = ({
  settings,
  setSettings,
}) => {
  const { appState } = useAppStore();

  function setStack(stack: Stack) {
    setSettings((prev: Settings) => ({
      ...prev,
      generatedCodeConfig: stack,
    }));
  }

  function setModel(model: CodeGenerationModel) {
    setSettings((prev: Settings) => ({
      ...prev,
      codeGenerationModel: model,
    }));

  }

  const shouldDisableUpdates =
    appState === AppState.CODING || appState === AppState.CODE_READY;

  return (
    <div className="flex flex-col gap-y-2">
      <OutputSettingsSection
        stack={settings.generatedCodeConfig}
        setStack={setStack}
        shouldDisableUpdates={shouldDisableUpdates}
      />
      <ModelsSettingSection
        model={settings.codeGenerationModel}
        setModel={setModel}
        shouldDisableUpdates={shouldDisableUpdates}
      />


    </div>

  );
};
