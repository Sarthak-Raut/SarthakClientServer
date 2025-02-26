export const CATEGORY_TYPE = {
    ALL: "all",
    FICTION: "fiction",
    CLASSIC: "classic",
    THRILLER: "thriller",
    ROMANCE: "romance",
} as const;

export type CategoryType = typeof CATEGORY_TYPE[keyof typeof CATEGORY_TYPE];

export const VALID_CATEGORIES: Record<string, CategoryType> = {
    all: CATEGORY_TYPE.ALL,
    fiction: CATEGORY_TYPE.FICTION,
    classic: CATEGORY_TYPE.CLASSIC,
    thriller: CATEGORY_TYPE.THRILLER,
    romance: CATEGORY_TYPE.ROMANCE,
};