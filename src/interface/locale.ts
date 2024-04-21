import { Namespace, TFunction } from 'i18next';

interface TranslationData {
  [key: string]: string;
}

// 交叉类型，确保符合 Namespace<string> 约束
type TranslationNamespace = TranslationData & Namespace<string>;

export interface UseTranslationResponse {
  t: TFunction<TranslationNamespace>
  i18n: {
    language: string;
    changeLanguage: (lng: string) => Promise<TFunction<TranslationNamespace>>
  };
}
