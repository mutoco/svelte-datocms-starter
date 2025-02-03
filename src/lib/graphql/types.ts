import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BooleanType: { input: any; output: any; }
  CustomData: { input: any; output: any; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  FloatType: { input: any; output: any; }
  IntType: { input: any; output: any; }
  ItemId: { input: any; output: any; }
  JsonField: { input: any; output: any; }
  MetaTagAttributes: { input: any; output: any; }
  UploadId: { input: any; output: any; }
};

export type AboutItemModelBlocksField = ClusterRecord | ImageBreakerRecord | ImageSliderRecord | KeyFigureRecord | LinksBlockRecord | ListPublicationRecord | QuoteBlockRecord | SectionBlockRecord | TeaserContentRecord | TeaserGetInvolvedRecord | TeaserListRecord | TeaserTextRecord | TextAsideRecord | TextLeadAsideRecord | VideoAsideRecord | VideoFullRecord;

export type AboutItemModelBlocksFieldListListNonNullMultiLocaleField = {
  __typename?: 'AboutItemModelBlocksFieldListListNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Array<AboutItemModelBlocksField>;
};

export type AboutItemModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<AboutItemModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AboutItemModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  navigationTitle?: InputMaybe<StringFilter>;
  parentPid?: InputMaybe<StringFilter>;
  position?: InputMaybe<PositionFilter>;
  seoSocial?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
};

export enum AboutItemModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NavigationTitleAsc = 'navigationTitle_ASC',
  NavigationTitleDesc = 'navigationTitle_DESC',
  ParentPidAsc = 'parentPid_ASC',
  ParentPidDesc = 'parentPid_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Record of type 6 About Item (about_item) */
export type AboutItemRecord = RecordInterface & {
  __typename?: 'AboutItemRecord';
  _allBlocksLocales?: Maybe<Array<AboutItemModelBlocksFieldListListNonNullMultiLocaleField>>;
  _allNavigationTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSeoSocialLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allSlugLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  blocks: Array<AboutItemModelBlocksField>;
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  navigationTitle?: Maybe<Scalars['String']['output']>;
  parentPid?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['IntType']['output']>;
  seoSocial?: Maybe<SeoField>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Record of type 6 About Item (about_item) */
export type AboutItemRecord_AllBlocksLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 6 About Item (about_item) */
export type AboutItemRecord_AllNavigationTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 6 About Item (about_item) */
export type AboutItemRecord_AllSeoSocialLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 6 About Item (about_item) */
export type AboutItemRecord_AllSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 6 About Item (about_item) */
export type AboutItemRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 6 About Item (about_item) */
export type AboutItemRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 6 About Item (about_item) */
export type AboutItemRecordBlocksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 6 About Item (about_item) */
export type AboutItemRecordNavigationTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 6 About Item (about_item) */
export type AboutItemRecordSeoSocialArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 6 About Item (about_item) */
export type AboutItemRecordSlugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 6 About Item (about_item) */
export type AboutItemRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type AboutPageModelContentBlocksField = LinksBlockRecord | ListPublicationRecord | TeaserContentRecord | TeaserGetInvolvedRecord | TeaserTextRecord | TextLeadAsideRecord;

export type AboutPageModelContentBlocksFieldListListNonNullMultiLocaleField = {
  __typename?: 'AboutPageModelContentBlocksFieldListListNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Array<AboutPageModelContentBlocksField>;
};

export type AboutPageModelIntroductionField = {
  __typename?: 'AboutPageModelIntroductionField';
  blocks: Array<Scalars['String']['output']>;
  links: Array<AboutPageModelIntroductionLinksField>;
  value: Scalars['JsonField']['output'];
};

export type AboutPageModelIntroductionFieldMultiLocaleField = {
  __typename?: 'AboutPageModelIntroductionFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<AboutPageModelIntroductionField>;
};

export type AboutPageModelIntroductionLinksField = AboutItemRecord | AboutPageRecord | AnnualreportItemRecord | AnnualreportPageRecord | EmployeeItemRecord | EventItemRecord | HomePageRecord | MetaItemRecord | NewsItemRecord | ProjectItemRecord | ProjectUpdateItemRecord | PublicationItemRecord | RegionItemRecord | RegionsPageRecord | TopicItemRecord | TopicsPageRecord;

/** Record of type 6 About Page (about_page) */
export type AboutPageRecord = RecordInterface & {
  __typename?: 'AboutPageRecord';
  _allContentBlocksLocales?: Maybe<Array<AboutPageModelContentBlocksFieldListListNonNullMultiLocaleField>>;
  _allIntroductionLocales?: Maybe<Array<AboutPageModelIntroductionFieldMultiLocaleField>>;
  _allNavigationTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSlugLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  contentBlocks: Array<AboutPageModelContentBlocksField>;
  id: Scalars['ItemId']['output'];
  introduction?: Maybe<AboutPageModelIntroductionField>;
  navigationTitle?: Maybe<Scalars['String']['output']>;
  seoSocial?: Maybe<SeoField>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Record of type 6 About Page (about_page) */
export type AboutPageRecord_AllContentBlocksLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 6 About Page (about_page) */
export type AboutPageRecord_AllIntroductionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 6 About Page (about_page) */
export type AboutPageRecord_AllNavigationTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 6 About Page (about_page) */
export type AboutPageRecord_AllSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 6 About Page (about_page) */
export type AboutPageRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 6 About Page (about_page) */
export type AboutPageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 6 About Page (about_page) */
export type AboutPageRecordContentBlocksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 6 About Page (about_page) */
export type AboutPageRecordIntroductionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 6 About Page (about_page) */
export type AboutPageRecordNavigationTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 6 About Page (about_page) */
export type AboutPageRecordSlugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 6 About Page (about_page) */
export type AboutPageRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type AnnualreportItemModelBlocksField = ImageSliderRecord | ListPublicationRecord | QuoteBlockRecord | SectionBlockRecord | TeaserContentRecord | TextCenterRecord | VideoFullRecord;

/** Specify nested blocks fields conditions */
export type AnnualreportItemModelBlocksFieldBlocksConditions = {
  imageSlider?: InputMaybe<ImageSliderModelFilter>;
  listPublication?: InputMaybe<ListPublicationModelFilter>;
  quoteBlock?: InputMaybe<QuoteBlockModelFilter>;
  sectionBlock?: InputMaybe<SectionBlockModelFilter>;
  teaserContent?: InputMaybe<TeaserContentModelFilter>;
  textCenter?: InputMaybe<TextCenterModelFilter>;
  videoFull?: InputMaybe<VideoFullModelFilter>;
};

/** Specify nested blocks types presence */
export type AnnualreportItemModelBlocksFieldBlocksPresence = {
  imageSlider?: InputMaybe<Scalars['BooleanType']['input']>;
  listPublication?: InputMaybe<Scalars['BooleanType']['input']>;
  quoteBlock?: InputMaybe<Scalars['BooleanType']['input']>;
  sectionBlock?: InputMaybe<Scalars['BooleanType']['input']>;
  teaserContent?: InputMaybe<Scalars['BooleanType']['input']>;
  textCenter?: InputMaybe<Scalars['BooleanType']['input']>;
  videoFull?: InputMaybe<Scalars['BooleanType']['input']>;
};

/** Specify how to filter this specific Modular Content field instance */
export type AnnualreportItemModelBlocksFieldFilter = {
  /** Filter records containing at least one block matching the specified conditions */
  any?: InputMaybe<AnnualreportItemModelBlocksFieldBlocksConditions>;
  /** Filter records containing at least one block of specified type or not */
  containsAny?: InputMaybe<AnnualreportItemModelBlocksFieldBlocksPresence>;
  /** Filter records containing at least one block of any kind or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
};

export type AnnualreportItemModelBlocksFieldListListNonNullMultiLocaleField = {
  __typename?: 'AnnualreportItemModelBlocksFieldListListNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Array<AnnualreportItemModelBlocksField>;
};

export type AnnualreportItemModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<AnnualreportItemModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AnnualreportItemModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  blocks?: InputMaybe<AnnualreportItemModelBlocksFieldFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  navigationTitle?: InputMaybe<StringFilter>;
  parentPid?: InputMaybe<StringFilter>;
  seoSocial?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  subtitle?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export enum AnnualreportItemModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NavigationTitleAsc = 'navigationTitle_ASC',
  NavigationTitleDesc = 'navigationTitle_DESC',
  ParentPidAsc = 'parentPid_ASC',
  ParentPidDesc = 'parentPid_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Record of type 7 Annual Report Item (annualreport_item) */
export type AnnualreportItemRecord = RecordInterface & {
  __typename?: 'AnnualreportItemRecord';
  _allBlocksLocales?: Maybe<Array<AnnualreportItemModelBlocksFieldListListNonNullMultiLocaleField>>;
  _allNavigationTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSeoSocialLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allSlugLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSubtitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  blocks: Array<AnnualreportItemModelBlocksField>;
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  navigationTitle?: Maybe<Scalars['String']['output']>;
  parentPid?: Maybe<Scalars['String']['output']>;
  seoSocial?: Maybe<SeoField>;
  slug?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Record of type 7 Annual Report Item (annualreport_item) */
export type AnnualreportItemRecord_AllBlocksLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 7 Annual Report Item (annualreport_item) */
export type AnnualreportItemRecord_AllNavigationTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 7 Annual Report Item (annualreport_item) */
export type AnnualreportItemRecord_AllSeoSocialLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 7 Annual Report Item (annualreport_item) */
export type AnnualreportItemRecord_AllSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 7 Annual Report Item (annualreport_item) */
export type AnnualreportItemRecord_AllSubtitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 7 Annual Report Item (annualreport_item) */
export type AnnualreportItemRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 7 Annual Report Item (annualreport_item) */
export type AnnualreportItemRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 7 Annual Report Item (annualreport_item) */
export type AnnualreportItemRecordBlocksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 7 Annual Report Item (annualreport_item) */
export type AnnualreportItemRecordNavigationTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 7 Annual Report Item (annualreport_item) */
export type AnnualreportItemRecordSeoSocialArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 7 Annual Report Item (annualreport_item) */
export type AnnualreportItemRecordSlugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 7 Annual Report Item (annualreport_item) */
export type AnnualreportItemRecordSubtitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 7 Annual Report Item (annualreport_item) */
export type AnnualreportItemRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type 7 Annual Report Page (annualreport_page) */
export type AnnualreportPageRecord = RecordInterface & {
  __typename?: 'AnnualreportPageRecord';
  _allNavigationTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSeoSocialLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allSlugLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  navigationTitle?: Maybe<Scalars['String']['output']>;
  parentPid?: Maybe<Scalars['String']['output']>;
  seoSocial?: Maybe<SeoField>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Record of type 7 Annual Report Page (annualreport_page) */
export type AnnualreportPageRecord_AllNavigationTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 7 Annual Report Page (annualreport_page) */
export type AnnualreportPageRecord_AllSeoSocialLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 7 Annual Report Page (annualreport_page) */
export type AnnualreportPageRecord_AllSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 7 Annual Report Page (annualreport_page) */
export type AnnualreportPageRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 7 Annual Report Page (annualreport_page) */
export type AnnualreportPageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 7 Annual Report Page (annualreport_page) */
export type AnnualreportPageRecordNavigationTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 7 Annual Report Page (annualreport_page) */
export type AnnualreportPageRecordSeoSocialArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 7 Annual Report Page (annualreport_page) */
export type AnnualreportPageRecordSlugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 7 Annual Report Page (annualreport_page) */
export type AnnualreportPageRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Author External (author_external) */
export type AuthorExternalRecord = RecordInterface & {
  __typename?: 'AuthorExternalRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  authorName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  url?: Maybe<Scalars['String']['output']>;
};


/** Block of type Author External (author_external) */
export type AuthorExternalRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Author Internal (author_internal) */
export type AuthorInternalRecord = RecordInterface & {
  __typename?: 'AuthorInternalRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  author?: Maybe<EmployeeItemRecord>;
  id: Scalars['ItemId']['output'];
};


/** Block of type Author Internal (author_internal) */
export type AuthorInternalRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Boolean fields */
export type BooleanFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['BooleanType']['input']>;
};

/** Block of type 8.1 Cluster (cluster) */
export type ClusterRecord = RecordInterface & {
  __typename?: 'ClusterRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
};


/** Block of type 8.1 Cluster (cluster) */
export type ClusterRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type CollectionMetadata = {
  __typename?: 'CollectionMetadata';
  count: Scalars['IntType']['output'];
};

export enum ColorBucketType {
  Black = 'black',
  Blue = 'blue',
  Brown = 'brown',
  Cyan = 'cyan',
  Green = 'green',
  Grey = 'grey',
  Orange = 'orange',
  Pink = 'pink',
  Purple = 'purple',
  Red = 'red',
  White = 'white',
  Yellow = 'yellow'
}

export type ColorField = {
  __typename?: 'ColorField';
  alpha: Scalars['IntType']['output'];
  blue: Scalars['IntType']['output'];
  cssRgb: Scalars['String']['output'];
  green: Scalars['IntType']['output'];
  hex: Scalars['String']['output'];
  red: Scalars['IntType']['output'];
};

/** Record of type Cookie (cookie) */
export type CookieRecord = RecordInterface & {
  __typename?: 'CookieRecord';
  _allTextLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  text?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Record of type Cookie (cookie) */
export type CookieRecord_AllTextLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Cookie (cookie) */
export type CookieRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Cookie (cookie) */
export type CookieRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Cookie (cookie) */
export type CookieRecordTextArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Cookie (cookie) */
export type CookieRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by creation datetime */
export type CreatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Specifies how to filter Date fields */
export type DateFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['Date']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['Date']['input']>;
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['Date']['input']>;
  /** Filter records with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['Date']['input']>;
  /** Filter records with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['Date']['input']>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['Date']['input']>;
};

/** Specifies how to filter DateTime fields */
export type DateTimeFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EmployeeItemModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<EmployeeItemModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EmployeeItemModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  name?: InputMaybe<StringFilter>;
  parentPid?: InputMaybe<StringFilter>;
  position?: InputMaybe<PositionFilter>;
  projects?: InputMaybe<LinksFilter>;
  publications?: InputMaybe<LinksFilter>;
  regions?: InputMaybe<LinksFilter>;
  role?: InputMaybe<StringFilter>;
  seoSocial?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  teams?: InputMaybe<LinksFilter>;
  text?: InputMaybe<TextFilter>;
  units?: InputMaybe<LinksFilter>;
};

export enum EmployeeItemModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ParentPidAsc = 'parentPid_ASC',
  ParentPidDesc = 'parentPid_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  RoleAsc = 'role_ASC',
  RoleDesc = 'role_DESC'
}

/** Record of type 6 Employee Item (employee_item) */
export type EmployeeItemRecord = RecordInterface & {
  __typename?: 'EmployeeItemRecord';
  _allRoleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSeoSocialLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allSlugLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTextLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  name?: Maybe<Scalars['String']['output']>;
  parentPid?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['IntType']['output']>;
  projects: Array<ProjectItemRecord>;
  publications: Array<PublicationItemRecord>;
  regions: Array<RegionItemRecord>;
  role?: Maybe<Scalars['String']['output']>;
  seoSocial?: Maybe<SeoField>;
  slug?: Maybe<Scalars['String']['output']>;
  socialMedia: Array<LinkExternalRecord>;
  teams: Array<TeamTagRecord>;
  text?: Maybe<Scalars['String']['output']>;
  units: Array<UnitTagRecord>;
};


/** Record of type 6 Employee Item (employee_item) */
export type EmployeeItemRecord_AllRoleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 6 Employee Item (employee_item) */
export type EmployeeItemRecord_AllSeoSocialLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 6 Employee Item (employee_item) */
export type EmployeeItemRecord_AllSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 6 Employee Item (employee_item) */
export type EmployeeItemRecord_AllTextLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type 6 Employee Item (employee_item) */
export type EmployeeItemRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 6 Employee Item (employee_item) */
export type EmployeeItemRecordRoleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 6 Employee Item (employee_item) */
export type EmployeeItemRecordSeoSocialArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 6 Employee Item (employee_item) */
export type EmployeeItemRecordSlugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 6 Employee Item (employee_item) */
export type EmployeeItemRecordTextArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EventItemModelContentBlocksField = ImageSliderRecord | QuoteBlockRecord | QuoteInTextRecord | TextCenterRecord | TextLeadCenterRecord;

export type EventItemModelContentBlocksFieldListListNonNullMultiLocaleField = {
  __typename?: 'EventItemModelContentBlocksFieldListListNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Array<EventItemModelContentBlocksField>;
};

export type EventItemModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<EventItemModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EventItemModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  dateTimeEnd?: InputMaybe<DateTimeFilter>;
  dateTimeStart?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<ItemIdFilter>;
  locationIsRemote?: InputMaybe<BooleanFilter>;
  locationLink?: InputMaybe<StringFilter>;
  locationName?: InputMaybe<StringFilter>;
  navigationTitle?: InputMaybe<StringFilter>;
  parentPid?: InputMaybe<StringFilter>;
  project?: InputMaybe<LinkFilter>;
  region?: InputMaybe<LinkFilter>;
  seoSocial?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  text?: InputMaybe<TextFilter>;
  title?: InputMaybe<StringFilter>;
  topic?: InputMaybe<LinkFilter>;
};

export enum EventItemModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  DateTimeEndAsc = 'dateTimeEnd_ASC',
  DateTimeEndDesc = 'dateTimeEnd_DESC',
  DateTimeStartAsc = 'dateTimeStart_ASC',
  DateTimeStartDesc = 'dateTimeStart_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LocationIsRemoteAsc = 'locationIsRemote_ASC',
  LocationIsRemoteDesc = 'locationIsRemote_DESC',
  LocationLinkAsc = 'locationLink_ASC',
  LocationLinkDesc = 'locationLink_DESC',
  LocationNameAsc = 'locationName_ASC',
  LocationNameDesc = 'locationName_DESC',
  NavigationTitleAsc = 'navigationTitle_ASC',
  NavigationTitleDesc = 'navigationTitle_DESC',
  ParentPidAsc = 'parentPid_ASC',
  ParentPidDesc = 'parentPid_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Record of type 9 Event Item (event_item) */
export type EventItemRecord = RecordInterface & {
  __typename?: 'EventItemRecord';
  _allContentBlocksLocales?: Maybe<Array<EventItemModelContentBlocksFieldListListNonNullMultiLocaleField>>;
  _allLocationLinkLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allLocationNameLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allNavigationTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allRegisterLinkLocales?: Maybe<Array<LinkExternalRecordMultiLocaleField>>;
  _allSeoSocialLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allSlugLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTextLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  contentBlocks: Array<EventItemModelContentBlocksField>;
  dateTimeEnd?: Maybe<Scalars['DateTime']['output']>;
  dateTimeStart?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ItemId']['output'];
  locationIsRemote: Scalars['BooleanType']['output'];
  locationLink?: Maybe<Scalars['String']['output']>;
  locationName?: Maybe<Scalars['String']['output']>;
  navigationTitle?: Maybe<Scalars['String']['output']>;
  parentPid?: Maybe<Scalars['String']['output']>;
  project?: Maybe<ProjectItemRecord>;
  region?: Maybe<RegionItemRecord>;
  registerLink?: Maybe<LinkExternalRecord>;
  seoSocial?: Maybe<SeoField>;
  slug?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topic?: Maybe<TopicItemRecord>;
};


/** Record of type 9 Event Item (event_item) */
export type EventItemRecord_AllContentBlocksLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 9 Event Item (event_item) */
export type EventItemRecord_AllLocationLinkLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 9 Event Item (event_item) */
export type EventItemRecord_AllLocationNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 9 Event Item (event_item) */
export type EventItemRecord_AllNavigationTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 9 Event Item (event_item) */
export type EventItemRecord_AllRegisterLinkLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 9 Event Item (event_item) */
export type EventItemRecord_AllSeoSocialLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 9 Event Item (event_item) */
export type EventItemRecord_AllSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 9 Event Item (event_item) */
export type EventItemRecord_AllTextLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type 9 Event Item (event_item) */
export type EventItemRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 9 Event Item (event_item) */
export type EventItemRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 9 Event Item (event_item) */
export type EventItemRecordContentBlocksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 9 Event Item (event_item) */
export type EventItemRecordLocationLinkArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 9 Event Item (event_item) */
export type EventItemRecordLocationNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 9 Event Item (event_item) */
export type EventItemRecordNavigationTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 9 Event Item (event_item) */
export type EventItemRecordRegisterLinkArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 9 Event Item (event_item) */
export type EventItemRecordSeoSocialArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 9 Event Item (event_item) */
export type EventItemRecordSlugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 9 Event Item (event_item) */
export type EventItemRecordTextArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type 9 Event Item (event_item) */
export type EventItemRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type EventsPageModelIntroductionField = {
  __typename?: 'EventsPageModelIntroductionField';
  blocks: Array<Scalars['String']['output']>;
  links: Array<EventsPageModelIntroductionLinksField>;
  value: Scalars['JsonField']['output'];
};

export type EventsPageModelIntroductionFieldMultiLocaleField = {
  __typename?: 'EventsPageModelIntroductionFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<EventsPageModelIntroductionField>;
};

export type EventsPageModelIntroductionLinksField = AboutItemRecord | AboutPageRecord | AnnualreportItemRecord | AnnualreportPageRecord | EmployeeItemRecord | EventItemRecord | HomePageRecord | MetaItemRecord | NewsItemRecord | ProjectItemRecord | ProjectUpdateItemRecord | PublicationItemRecord | RegionItemRecord | RegionsPageRecord | TopicItemRecord | TopicsPageRecord;

/** Record of type 13 Events Page (events_page) */
export type EventsPageRecord = RecordInterface & {
  __typename?: 'EventsPageRecord';
  _allIntroductionLocales?: Maybe<Array<EventsPageModelIntroductionFieldMultiLocaleField>>;
  _allNavigationTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSlugLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  introduction?: Maybe<EventsPageModelIntroductionField>;
  navigationTitle?: Maybe<Scalars['String']['output']>;
  seoSocial?: Maybe<SeoField>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Record of type 13 Events Page (events_page) */
export type EventsPageRecord_AllIntroductionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 13 Events Page (events_page) */
export type EventsPageRecord_AllNavigationTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 13 Events Page (events_page) */
export type EventsPageRecord_AllSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 13 Events Page (events_page) */
export type EventsPageRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 13 Events Page (events_page) */
export type EventsPageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 13 Events Page (events_page) */
export type EventsPageRecordIntroductionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 13 Events Page (events_page) */
export type EventsPageRecordNavigationTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 13 Events Page (events_page) */
export type EventsPageRecordSlugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 13 Events Page (events_page) */
export type EventsPageRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type ExploreBlockModelSlotField = ExploreMoodRecord | ExploreRegionRecord | ExploreTopicRecord;

/** Block of type 0.1 Explore Block (explore_block) */
export type ExploreBlockRecord = RecordInterface & {
  __typename?: 'ExploreBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  slot?: Maybe<ExploreBlockModelSlotField>;
  text?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Block of type 0.1 Explore Block (explore_block) */
export type ExploreBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type 0.1 Explore Block (explore_block) */
export type ExploreBlockRecordTextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ExploreBlockRecordListListNonNullMultiLocaleField = {
  __typename?: 'ExploreBlockRecordListListNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Array<ExploreBlockRecord>;
};

/** Block of type 0.2 Explore Mood (explore_mood) */
export type ExploreMoodRecord = RecordInterface & {
  __typename?: 'ExploreMoodRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  heroImages: Array<FileField>;
  id: Scalars['ItemId']['output'];
};


/** Block of type 0.2 Explore Mood (explore_mood) */
export type ExploreMoodRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type 0.4 Explore Region (explore_region) */
export type ExploreRegionRecord = RecordInterface & {
  __typename?: 'ExploreRegionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  regionItems: Array<RegionItemRecord>;
};


/** Block of type 0.4 Explore Region (explore_region) */
export type ExploreRegionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type 0.3 Explore Topic (explore_topic) */
export type ExploreTopicRecord = RecordInterface & {
  __typename?: 'ExploreTopicRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  topicItems: Array<TopicItemRecord>;
};


/** Block of type 0.3 Explore Topic (explore_topic) */
export type ExploreTopicRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export enum FaviconType {
  AppleTouchIcon = 'appleTouchIcon',
  Icon = 'icon',
  MsApplication = 'msApplication'
}

export type FileField = FileFieldInterface & {
  __typename?: 'FileField';
  _createdAt: Scalars['DateTime']['output'];
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  alt?: Maybe<Scalars['String']['output']>;
  author?: Maybe<Scalars['String']['output']>;
  basename: Scalars['String']['output'];
  blurUpThumb?: Maybe<Scalars['String']['output']>;
  blurhash?: Maybe<Scalars['String']['output']>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars['String']['output']>;
  customData: Scalars['CustomData']['output'];
  exifInfo: Scalars['CustomData']['output'];
  filename: Scalars['String']['output'];
  focalPoint?: Maybe<FocalPoint>;
  format: Scalars['String']['output'];
  height?: Maybe<Scalars['IntType']['output']>;
  id: Scalars['UploadId']['output'];
  md5: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  responsiveImage?: Maybe<ResponsiveImage>;
  size: Scalars['IntType']['output'];
  smartTags: Array<Scalars['String']['output']>;
  tags: Array<Scalars['String']['output']>;
  thumbhash?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
  video?: Maybe<UploadVideoField>;
  width?: Maybe<Scalars['IntType']['output']>;
};


export type FileFieldAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float']['input'];
  quality?: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
};


export type FileFieldCustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldFocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldResponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars['String']['input']>;
};


export type FileFieldTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldUrlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

export type FileFieldInterface = {
  _createdAt: Scalars['DateTime']['output'];
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  alt?: Maybe<Scalars['String']['output']>;
  author?: Maybe<Scalars['String']['output']>;
  basename: Scalars['String']['output'];
  blurUpThumb?: Maybe<Scalars['String']['output']>;
  blurhash?: Maybe<Scalars['String']['output']>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars['String']['output']>;
  customData: Scalars['CustomData']['output'];
  exifInfo: Scalars['CustomData']['output'];
  filename: Scalars['String']['output'];
  focalPoint?: Maybe<FocalPoint>;
  format: Scalars['String']['output'];
  height?: Maybe<Scalars['IntType']['output']>;
  id: Scalars['UploadId']['output'];
  md5: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  responsiveImage?: Maybe<ResponsiveImage>;
  size: Scalars['IntType']['output'];
  smartTags: Array<Scalars['String']['output']>;
  tags: Array<Scalars['String']['output']>;
  thumbhash?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
  video?: Maybe<UploadVideoField>;
  width?: Maybe<Scalars['IntType']['output']>;
};


export type FileFieldInterfaceAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldInterfaceBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float']['input'];
  quality?: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
};


export type FileFieldInterfaceCustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldInterfaceFocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldInterfaceResponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars['String']['input']>;
};


export type FileFieldInterfaceTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldInterfaceUrlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

/** Specifies how to filter Single-file/image fields */
export type FileFilter = {
  /** Search for records with an exact match. The specified value must be an Upload ID */
  eq?: InputMaybe<Scalars['UploadId']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records that have one of the specified uploads */
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
  /** Exclude records with an exact match. The specified value must be an Upload ID */
  neq?: InputMaybe<Scalars['UploadId']['input']>;
  /** Filter records that do not have one of the specified uploads */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
};

export type FooterModelMetaLinksField = AboutItemRecord | MetaItemRecord;

/** Record of type Footer (footer) */
export type FooterRecord = RecordInterface & {
  __typename?: 'FooterRecord';
  _allSubscriptionTextLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  featuredLinks: Array<MetaItemRecord>;
  id: Scalars['ItemId']['output'];
  metaLinks: Array<FooterModelMetaLinksField>;
  socialLinks: Array<LinkExternalRecord>;
  subscriptionText?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Record of type Footer (footer) */
export type FooterRecord_AllSubscriptionTextLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Footer (footer) */
export type FooterRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Footer (footer) */
export type FooterRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Footer (footer) */
export type FooterRecordSubscriptionTextArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Footer (footer) */
export type FooterRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Specifies how to filter Multiple files/images field */
export type GalleryFilter = {
  /** Filter records that have all of the specified uploads. The specified values must be Upload IDs */
  allIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
  /** Filter records that have one of the specified uploads. The specified values must be Upload IDs */
  anyIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
  /** Search for records with an exact match. The specified values must be Upload IDs */
  eq?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records that do not have any of the specified uploads. The specified values must be Upload IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
};

export type GlobalSeoField = {
  __typename?: 'GlobalSeoField';
  facebookPageUrl?: Maybe<Scalars['String']['output']>;
  fallbackSeo?: Maybe<SeoField>;
  siteName?: Maybe<Scalars['String']['output']>;
  titleSuffix?: Maybe<Scalars['String']['output']>;
  twitterAccount?: Maybe<Scalars['String']['output']>;
};

/** Record of type 1 Home Page (home_page) */
export type HomePageRecord = RecordInterface & {
  __typename?: 'HomePageRecord';
  _allBlocksLocales?: Maybe<Array<ExploreBlockRecordListListNonNullMultiLocaleField>>;
  _allCtaTextLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allNavigationTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSeoSocialLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allSlugLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  blocks: Array<ExploreBlockRecord>;
  ctaText?: Maybe<Scalars['String']['output']>;
  heroButton?: Maybe<AboutItemRecord>;
  id: Scalars['ItemId']['output'];
  navigationTitle?: Maybe<Scalars['String']['output']>;
  newsTeaser?: Maybe<NewsItemRecord>;
  seoSocial?: Maybe<SeoField>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Record of type 1 Home Page (home_page) */
export type HomePageRecord_AllBlocksLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 1 Home Page (home_page) */
export type HomePageRecord_AllCtaTextLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type 1 Home Page (home_page) */
export type HomePageRecord_AllNavigationTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 1 Home Page (home_page) */
export type HomePageRecord_AllSeoSocialLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 1 Home Page (home_page) */
export type HomePageRecord_AllSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 1 Home Page (home_page) */
export type HomePageRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type 1 Home Page (home_page) */
export type HomePageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 1 Home Page (home_page) */
export type HomePageRecordBlocksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 1 Home Page (home_page) */
export type HomePageRecordCtaTextArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type 1 Home Page (home_page) */
export type HomePageRecordNavigationTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 1 Home Page (home_page) */
export type HomePageRecordSeoSocialArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 1 Home Page (home_page) */
export type HomePageRecordSlugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 1 Home Page (home_page) */
export type HomePageRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type 3.2 Image Breaker (image_breaker) */
export type ImageBreakerRecord = RecordInterface & {
  __typename?: 'ImageBreakerRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  imageSlider: Array<FileField>;
};


/** Block of type 3.2 Image Breaker (image_breaker) */
export type ImageBreakerRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type 3.1 Image Center (image_center) */
export type ImageCenterRecord = RecordInterface & {
  __typename?: 'ImageCenterRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  image: Array<FileField>;
};


/** Block of type 3.1 Image Center (image_center) */
export type ImageCenterRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Image Link (image_link) */
export type ImageLinkRecord = RecordInterface & {
  __typename?: 'ImageLinkRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  link?: Maybe<Scalars['String']['output']>;
};


/** Block of type Image Link (image_link) */
export type ImageLinkRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type ImageSliderModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ImageSliderModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ImageSliderModelFilter>>>;
  id?: InputMaybe<ItemIdFilter>;
  imageSlider?: InputMaybe<GalleryFilter>;
};

/** Block of type 3.3 Images Slider (image_slider) */
export type ImageSliderRecord = RecordInterface & {
  __typename?: 'ImageSliderRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  imageSlider: Array<FileField>;
};


/** Block of type 3.3 Images Slider (image_slider) */
export type ImageSliderRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type ImgixParams = {
  /**
   * Aspect Ratio
   *
   * Specifies an aspect ratio to maintain when resizing and cropping the image
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/ar)
   */
  ar?: InputMaybe<Scalars['String']['input']>;
  /**
   * Automatic
   *
   * Applies automatic enhancements to images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/auto)
   */
  auto?: InputMaybe<Array<ImgixParamsAuto>>;
  /**
   * Background Color
   *
   * Colors the background of padded and partially-transparent images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/bg)
   */
  bg?: InputMaybe<Scalars['String']['input']>;
  /**
   * Background Removal
   *
   * Removes background from image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/bg-remove)
   */
  bgRemove?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Background Removal Fallback
   *
   * Overrides default fallback behavior for bg-remove failures.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/bg-remove)
   */
  bgRemoveFallback?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Background Replacement
   *
   * Replaces background from image using a string based prompt.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/bg-replace)
   */
  bgReplace?: InputMaybe<Scalars['String']['input']>;
  /**
   * Background Removal Fallback
   *
   * Overrides default fallback behavior for bg-replace failures.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/bg-replace)
   */
  bgReplaceFallback?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Background Replacement Negative Prompt
   *
   * Provides a negative text suggestion for background replacement.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/bg-replace-neg-prompt)
   */
  bgReplaceNegPrompt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Blend
   *
   * Specifies the location of the blend image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend)
   */
  blend?: InputMaybe<Scalars['String']['input']>;
  /**
   * Blend Align
   *
   * Changes the blend alignment relative to the parent image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-align)
   */
  blendAlign?: InputMaybe<Array<ImgixParamsBlendAlign>>;
  /**
   * Blend Alpha
   *
   * Changes the alpha of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-alpha)
   */
  blendAlpha?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Blend Color
   *
   * Specifies a color to use when applying the blend.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-color)
   */
  blendColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Blend Crop
   *
   * Specifies the type of crop for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-crop)
   */
  blendCrop?: InputMaybe<Array<ImgixParamsBlendCrop>>;
  /**
   * Blend Fit
   *
   * Specifies the fit mode for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-fit)
   */
  blendFit?: InputMaybe<ImgixParamsBlendFit>;
  /**
   * Blend Height
   *
   * Adjusts the height of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-h)
   */
  blendH?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Blend Mode
   *
   * Sets the blend mode for a blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-mode)
   */
  blendMode?: InputMaybe<ImgixParamsBlendMode>;
  /**
   * Blend Padding
   *
   * Applies padding to the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-pad)
   */
  blendPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Blend Size
   *
   * Adjusts the size of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-size)
   */
  blendSize?: InputMaybe<ImgixParamsBlendSize>;
  /**
   * Blend Width
   *
   * Adjusts the width of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-w)
   */
  blendW?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Blend X Position
   *
   * Adjusts the x-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-x)
   */
  blendX?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Blend Y Position
   *
   * Adjusts the y-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-y)
   */
  blendY?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Gaussian Blur
   *
   * Applies a gaussian blur to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/blur)
   */
  blur?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Border Size & Color
   *
   * Applies a border to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border)
   */
  border?: InputMaybe<Scalars['String']['input']>;
  /**
   * Border Bottom
   *
   * Sets bottom border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-bottom)
   */
  borderBottom?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Border Left
   *
   * Sets left border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-left)
   */
  borderLeft?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Outer Border Radius
   *
   * Sets the outer radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius)
   */
  borderRadius?: InputMaybe<Scalars['String']['input']>;
  /**
   * Inner Border Radius
   *
   * Sets the inner radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner)
   */
  borderRadiusInner?: InputMaybe<Scalars['String']['input']>;
  /**
   * Border Right
   *
   * Sets right border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-right)
   */
  borderRight?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Border Top
   *
   * Sets top border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-top)
   */
  borderTop?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Brightness
   *
   * Adjusts the brightness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/bri)
   */
  bri?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Client Hints
   *
   * Sets one or more Client-Hints headers
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/ch)
   */
  ch?: InputMaybe<Array<ImgixParamsCh>>;
  /**
   * Chroma Subsampling
   *
   * Specifies the output chroma subsampling rate.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/chromasub)
   */
  chromasub?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Color Quantization
   *
   * Limits the number of unique colors in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/colorquant)
   */
  colorquant?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Palette Color Count
   *
   * Specifies how many colors to include in a palette-extraction response.
   *
   * Depends on: `palette`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/colors)
   */
  colors?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Contrast
   *
   * Adjusts the contrast of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/con)
   */
  con?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Mask Corner Radius
   *
   * Specifies the radius value for a rounded corner mask.
   *
   * Depends on: `mask=corners`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/corner-radius)
   */
  cornerRadius?: InputMaybe<Scalars['String']['input']>;
  /**
   * Crop Mode
   *
   * Specifies how to crop an image.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/crop)
   */
  crop?: InputMaybe<Array<ImgixParamsCrop>>;
  /**
   * Color Space
   *
   * Specifies the color space of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/cs)
   */
  cs?: InputMaybe<ImgixParamsCs>;
  /**
   * Download
   *
   * Forces a URL to use send-file in its response.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dl)
   */
  dl?: InputMaybe<Scalars['String']['input']>;
  /**
   * Dots Per Inch
   *
   * Sets the DPI value in the EXIF header.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dpi)
   */
  dpi?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Device Pixel Ratio
   *
   * Adjusts the device-pixel ratio of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/dpr)
   */
  dpr?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Duotone
   *
   * Applies a duotone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone)
   */
  duotone?: InputMaybe<Scalars['String']['input']>;
  /**
   * Duotone Alpha
   *
   * Changes the alpha of the duotone effect atop the source image.
   *
   * Depends on: `duotone`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone-alpha)
   */
  duotoneAlpha?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Exposure
   *
   * Adjusts the exposure of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/exp)
   */
  exp?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Url Expiration Timestamp
   *
   * A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/expires)
   */
  expires?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Face Index
   *
   * Selects a face to crop to.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faceindex)
   */
  faceindex?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Face Padding
   *
   * Adjusts padding around a selected face.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/facepad)
   */
  facepad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Json Face Data
   *
   * Specifies that face data should be included in output when combined with `fm=json`.
   *
   * Depends on: `fm=json`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faces)
   */
  faces?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Fill Mode
   *
   * Determines how to fill in additional space created by the fit setting
   *
   * Depends on: `fit`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill)
   */
  fill?: InputMaybe<ImgixParamsFill>;
  /**
   * Fill Color
   *
   * Sets the fill color for images with additional space created by the fit setting
   *
   * Depends on: `fill=solid`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-color)
   */
  fillColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Generative Fallback
   *
   * Sets the fallback behavior for generative fill.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gen-fallback)
   */
  fillGenFallback?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Fill Generative Negative Prompt
   *
   * Provides a negative text suggestion to the generative fill parameter. Used to reduce the probability of a subject, detail, or object appearing in generative output.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gen-neg-prompt)
   */
  fillGenNegPrompt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Generative Position
   *
   * Sets the position of the Origin Image in relation to the generative fill.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gen-pos)
   */
  fillGenPos?: InputMaybe<Array<ImgixParamsFillGenPos>>;
  /**
   * Fill Generative Prompt
   *
   * Provides a text suggestion to the generative fill parameter.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gen-prompt)
   */
  fillGenPrompt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Generative Seed
   *
   * Sets the generative seed value. Used to generate similar outputs from different prompts.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gen-seed)
   */
  fillGenSeed?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Fill Gradient Color Space
   *
   * Defines the color space as linear, sRGB, Oklab, HSL, or LCH for gradient color interpolation
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-cs)
   */
  fillGradientCs?: InputMaybe<ImgixParamsFillGradientCs>;
  /**
   * Fill Gradient Linear
   *
   * Blends a gradient between two colors, {color1} and {color2}, along a straight path
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-linear)
   */
  fillGradientLinear?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Gradient Linear Direction
   *
   * The fill-gradient-linear-direction specifies the gradient's direction, flowing towards the bottom, top, right, or left
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-linear-direction)
   */
  fillGradientLinearDirection?: InputMaybe<Array<ImgixParamsFillGradientLinearDirection>>;
  /**
   * Fill Gradient Radial
   *
   * The fill-gradient-radial parameter creates a circular gradient transitioning from a central color (Color1) to an outer color (Color2)
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-radial)
   */
  fillGradientRadial?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Gradient Radial Radius
   *
   * Parameter defines the radial gradient's radius as pixels or a percentage (0.0-1.0) of the image's smallest dimension
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-radial-radius)
   */
  fillGradientRadialRadius?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Gradient Radial X
   *
   * Specifies the location of the radial gradient's center along the x-axis, using either a pixel value or a floating point percentage (ranging from 0.0 to 1.0) of the image's width
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-radial-x)
   */
  fillGradientRadialX?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Fill Gradient Radial Y
   *
   * Parameter sets the radial gradient's center on the y-axis, using pixels or a 0.0 to 1.0 percentage of the image's height
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-radial-y)
   */
  fillGradientRadialY?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Fill Gradient Type
   *
   * Specifies if a gradient is radial (circular) or linear (straight)
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-type)
   */
  fillGradientType?: InputMaybe<ImgixParamsFillGradientType>;
  /**
   * Resize Fit Mode
   *
   * Specifies how to map the source image to the output image dimensions.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/fit)
   */
  fit?: InputMaybe<ImgixParamsFit>;
  /**
   * Flip Axis
   *
   * Flips an image on a specified axis.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/flip)
   */
  flip?: InputMaybe<ImgixParamsFlip>;
  /**
   * Output Format
   *
   * Changes the format of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/fm)
   */
  fm?: InputMaybe<ImgixParamsFm>;
  /**
   * Focal Point Debug
   *
   * Displays crosshairs identifying the location of the set focal point
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug)
   */
  fpDebug?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Focal Point X Position
   *
   * Sets the relative horizontal value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x)
   */
  fpX?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Focal Point Y Position
   *
   * Sets the relative vertical value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y)
   */
  fpY?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Focal Point Zoom
   *
   * Sets the relative zoom value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z)
   */
  fpZ?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Frames Per Second
   *
   * Specifies the framerate of the generated image.
   */
  fps?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Frame Selection
   *
   * Specifies the frame of an animated image to use.
   */
  frame?: InputMaybe<Scalars['String']['input']>;
  /**
   * Gamma
   *
   * Adjusts the gamma of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/gam)
   */
  gam?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Animated Gif Quality
   *
   * Specifies the quality of the animated gif. The higher the value, the better more compression is applied.
   *
   * Depends on: `fm=gif`
   */
  gifQ?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Grid Colors
   *
   * Sets grid colors for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridColors?: InputMaybe<Scalars['String']['input']>;
  /**
   * Grid Size
   *
   * Sets grid size for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridSize?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Image Height
   *
   * Adjusts the height of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/h)
   */
  h?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Highlight
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/high)
   */
  high?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Halftone
   *
   * Applies a half-tone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/htn)
   */
  htn?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Hue Shift
   *
   * Adjusts the hue of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/hue)
   */
  hue?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Frame Interval
   *
   * Displays every Nth frame starting with the first frame.
   */
  interval?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Invert
   *
   * Inverts the colors on the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/invert)
   */
  invert?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Iptc Passthrough
   *
   * Determine if IPTC data should be passed for JPEG images.
   */
  iptc?: InputMaybe<ImgixParamsIptc>;
  /**
   * Jpg Progressive
   *
   * Specifies whether or not a jpg/jpeg uses progressive (true) or baseline (false)
   */
  jpgProgressive?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Animation Loop Count
   *
   * Specifies the number of times an animated image should repeat. A value of 0 means infinite looping.
   */
  loop?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Lossless Compression
   *
   * Specifies that the output image should be a lossless variant.
   *
   * Depends on: `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/lossless)
   */
  lossless?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Watermark Image Url
   *
   * Specifies the location of the watermark image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark)
   */
  mark?: InputMaybe<Scalars['String']['input']>;
  /**
   * Watermark Alignment Mode
   *
   * Changes the watermark alignment relative to the parent image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-align)
   */
  markAlign?: InputMaybe<Array<ImgixParamsMarkAlign>>;
  /**
   * Watermark Alpha
   *
   * Changes the alpha of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-alpha)
   */
  markAlpha?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Base Url
   *
   * Changes base URL of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-base)
   */
  markBase?: InputMaybe<Scalars['String']['input']>;
  /**
   * Watermark Fit Mode
   *
   * Specifies the fit mode for watermark images.
   *
   * Depends on: `mark`, `markw`, `markh`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-fit)
   */
  markFit?: InputMaybe<ImgixParamsMarkFit>;
  /**
   * Watermark Height
   *
   * Adjusts the height of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-h)
   */
  markH?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Watermark Padding
   *
   * Applies padding to the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-pad)
   */
  markPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Rotation
   *
   * Rotates a watermark or tiled watermarks by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-rot)
   */
  markRot?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Watermark Scale
   *
   * Adjusts the scale of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-scale)
   */
  markScale?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Tile
   *
   * Adds tiled watermark.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-tile)
   */
  markTile?: InputMaybe<ImgixParamsMarkTile>;
  /**
   * Watermark Width
   *
   * Adjusts the width of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-w)
   */
  markW?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Watermark X Position
   *
   * Adjusts the x-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-x)
   */
  markX?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Y Position
   *
   * Adjusts the y-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-y)
   */
  markY?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Mask Type
   *
   * Defines the type of mask and specifies the URL if that type is selected.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask)
   */
  mask?: InputMaybe<Scalars['String']['input']>;
  /**
   * Mask Background Color
   *
   * Colors the background of the transparent mask area of images
   *
   * Depends on: `mask`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/mask-bg)
   */
  maskBg?: InputMaybe<Scalars['String']['input']>;
  /**
   * Maximum Height
   *
   * Specifies the maximum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-height)
   */
  maxH?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Maximum Width
   *
   * Specifies the maximum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-width)
   */
  maxW?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Minimum Height
   *
   * Specifies the minimum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-height)
   */
  minH?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Minimum Width
   *
   * Specifies the minimum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-width)
   */
  minW?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Monochrome
   *
   * Applies a monochrome effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/monochrome)
   */
  monochrome?: InputMaybe<Scalars['String']['input']>;
  /**
   * Noise Reduction Bound
   *
   * Reduces the noise in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nr)
   */
  nr?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Noise Reduction Sharpen
   *
   * Provides a threshold by which to sharpen an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nrs)
   */
  nrs?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Orientation
   *
   * Changes the image orientation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/orient)
   */
  orient?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding
   *
   * Pads an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad)
   */
  pad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Bottom
   *
   * Sets bottom padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-bottom)
   */
  padBottom?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Left
   *
   * Sets left padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-left)
   */
  padLeft?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Right
   *
   * Sets right padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-right)
   */
  padRight?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Top
   *
   * Sets top padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-top)
   */
  padTop?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Pdf Page Number
   *
   * Selects a page from a PDF for display.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/page)
   */
  page?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Color Palette Extraction
   *
   * Specifies an output format for palette-extraction.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/palette)
   */
  palette?: InputMaybe<ImgixParamsPalette>;
  /**
   * Pdf Annotation
   *
   * Enables or disables PDF annotation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/pdf-annotation)
   */
  pdfAnnotation?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Css Prefix
   *
   * Specifies a CSS prefix for all classes in palette-extraction.
   *
   * Depends on: `palette=css`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/prefix)
   */
  prefix?: InputMaybe<Scalars['String']['input']>;
  /**
   * Pixellate
   *
   * Applies a pixelation effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/px)
   */
  px?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Output Quality
   *
   * Adjusts the quality of an output image.
   *
   * Depends on: `fm=jpg`, `fm=pjpg`, `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/q)
   */
  q?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Source Rectangle Region
   *
   * Crops an image to a specified rectangle.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/rect)
   */
  rect?: InputMaybe<Scalars['String']['input']>;
  /**
   * Reverse
   *
   * Reverses the frame order on the source animation.
   */
  reverse?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Rotation
   *
   * Rotates an image by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/rot)
   */
  rot?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Saturation
   *
   * Adjusts the saturation of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sat)
   */
  sat?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Sepia Tone
   *
   * Applies a sepia effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/sepia)
   */
  sepia?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Shadow
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/shad)
   */
  shad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Sharpen
   *
   * Adjusts the sharpness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sharp)
   */
  sharp?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Frame Skip
   *
   * Skips every Nth frame starting with the first frame.
   */
  skip?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Bypasses any [DatoCMS Automatic Image Optimization](https://www.datocms.com/docs/cdn-settings/advanced-asset-settings) that might be set up for the project.
   *
   * Exercise caution when using this parameter, as it could significantly increase your bandwidth costs.
   */
  skipDefaultOptimizations?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Sanitize Svg
   *
   * Specifies whether to sanitize an SVG.
   */
  svgSanitize?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Transparency
   *
   * Adds checkerboard behind images which support transparency.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/transparency)
   */
  transparency?: InputMaybe<ImgixParamsTransparency>;
  /**
   * Trim Image
   *
   * Trims the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim)
   */
  trim?: InputMaybe<ImgixParamsTrim>;
  /**
   * Trim Color
   *
   * Specifies a trim color on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-color)
   */
  trimColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Trim Mean Difference
   *
   * Specifies the mean difference on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-md)
   */
  trimMd?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Trim Padding
   *
   * Pads the area of the source image before trimming.
   *
   * Depends on: `trim`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-pad)
   */
  trimPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Trim Standard Deviation
   *
   * Specifies the standard deviation on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-sd)
   */
  trimSd?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Trim Tolerance
   *
   * Specifies the tolerance on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-tol)
   */
  trimTol?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Text String
   *
   * Sets the text string to render.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt)
   */
  txt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Align
   *
   * Sets the vertical and horizontal alignment of rendered text relative to the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-align)
   */
  txtAlign?: InputMaybe<Array<ImgixParamsTxtAlign>>;
  /**
   * Text Clipping Mode
   *
   * Sets the clipping properties of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-clip)
   */
  txtClip?: InputMaybe<Array<ImgixParamsTxtClip>>;
  /**
   * Text Color
   *
   * Specifies the color of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-color)
   */
  txtColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Fit Mode
   *
   * Specifies the fit approach for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-fit)
   */
  txtFit?: InputMaybe<ImgixParamsTxtFit>;
  /**
   * Text Font
   *
   * Selects a font for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-font)
   */
  txtFont?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Leading
   *
   * Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-lead)
   */
  txtLead?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Outline
   *
   * Outlines the rendered text with a specified color.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line)
   */
  txtLine?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Outline Color
   *
   * Specifies a text outline color.
   *
   * Depends on: `txt`, `txtline`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line-color)
   */
  txtLineColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Padding
   *
   * Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-pad)
   */
  txtPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Shadow
   *
   * Applies a shadow to rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-shad)
   */
  txtShad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Text Font Size
   *
   * Sets the font size of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-size)
   */
  txtSize?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Tracking
   *
   * Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-track)
   */
  txtTrack?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Width
   *
   * Sets the width of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-width)
   */
  txtWidth?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text X Position
   *
   * Sets the horizontal (x) position of the text in pixels relative to the left edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-x)
   */
  txtX?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Y Position
   *
   * Sets the vertical (y) position of the text in pixels relative to the top edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-y)
   */
  txtY?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Super Resolution
   *
   * Uses generative AI fill to upscale low resolution images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/super-resolution/upscale)
   */
  upscale?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Super Resolution Fallback
   *
   * Overrides default fallback behavior for super resolution failures
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/super-resolution/upscale-fallback)
   */
  upscaleFallback?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Unsharp Mask
   *
   * Sharpens the source image using an unsharp mask.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usm)
   */
  usm?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Unsharp Mask Radius
   *
   * Specifies the radius for an unsharp mask operation.
   *
   * Depends on: `usm`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usmrad)
   */
  usmrad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Vibrance
   *
   * Adjusts the vibrance of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/vib)
   */
  vib?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Image Width
   *
   * Adjusts the width of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/w)
   */
  w?: InputMaybe<Scalars['FloatType']['input']>;
};

export enum ImgixParamsAuto {
  Compress = 'compress',
  Enhance = 'enhance',
  Format = 'format',
  Redeye = 'redeye'
}

export enum ImgixParamsBlendAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsBlendCrop {
  Bottom = 'bottom',
  Faces = 'faces',
  Left = 'left',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsBlendFit {
  Clamp = 'clamp',
  Clip = 'clip',
  Crop = 'crop',
  Max = 'max',
  Scale = 'scale'
}

export enum ImgixParamsBlendMode {
  Burn = 'burn',
  Color = 'color',
  Darken = 'darken',
  Difference = 'difference',
  Dodge = 'dodge',
  Exclusion = 'exclusion',
  Hardlight = 'hardlight',
  Hue = 'hue',
  Lighten = 'lighten',
  Luminosity = 'luminosity',
  Multiply = 'multiply',
  Normal = 'normal',
  Overlay = 'overlay',
  Saturation = 'saturation',
  Screen = 'screen',
  Softlight = 'softlight'
}

export enum ImgixParamsBlendSize {
  Inherit = 'inherit'
}

export enum ImgixParamsCh {
  Dpr = 'dpr',
  SaveData = 'saveData',
  Width = 'width'
}

export enum ImgixParamsCrop {
  Bottom = 'bottom',
  Edges = 'edges',
  Entropy = 'entropy',
  Faces = 'faces',
  Focalpoint = 'focalpoint',
  Left = 'left',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsCs {
  Adobergb1998 = 'adobergb1998',
  Srgb = 'srgb',
  Strip = 'strip',
  Tinysrgb = 'tinysrgb'
}

export enum ImgixParamsFill {
  Blur = 'blur',
  Gen = 'gen',
  Generative = 'generative',
  Gradient = 'gradient',
  Solid = 'solid'
}

export enum ImgixParamsFillGenPos {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsFillGradientCs {
  Hsl = 'hsl',
  Lch = 'lch',
  Linear = 'linear',
  Oklab = 'oklab',
  Srgb = 'srgb'
}

export enum ImgixParamsFillGradientLinearDirection {
  Bottom = 'bottom',
  Left = 'left',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsFillGradientType {
  Linear = 'linear',
  Radial = 'radial'
}

export enum ImgixParamsFit {
  Clamp = 'clamp',
  Clip = 'clip',
  Crop = 'crop',
  Facearea = 'facearea',
  Fill = 'fill',
  Fillmax = 'fillmax',
  Max = 'max',
  Min = 'min',
  Scale = 'scale'
}

export enum ImgixParamsFlip {
  H = 'h',
  Hv = 'hv',
  V = 'v'
}

export enum ImgixParamsFm {
  Avif = 'avif',
  Blurhash = 'blurhash',
  Gif = 'gif',
  Jp2 = 'jp2',
  Jpg = 'jpg',
  Json = 'json',
  Jxr = 'jxr',
  Mp4 = 'mp4',
  Pjpg = 'pjpg',
  Png = 'png',
  Png8 = 'png8',
  Png32 = 'png32',
  Webm = 'webm',
  Webp = 'webp'
}

export enum ImgixParamsIptc {
  Allow = 'allow',
  Block = 'block'
}

export enum ImgixParamsMarkAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsMarkFit {
  Clip = 'clip',
  Crop = 'crop',
  Fill = 'fill',
  Max = 'max',
  Scale = 'scale'
}

export enum ImgixParamsMarkTile {
  Grid = 'grid'
}

export enum ImgixParamsPalette {
  Css = 'css',
  Json = 'json'
}

export enum ImgixParamsTransparency {
  Grid = 'grid'
}

export enum ImgixParamsTrim {
  Auto = 'auto',
  Color = 'color'
}

export enum ImgixParamsTxtAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsTxtClip {
  Ellipsis = 'ellipsis',
  End = 'end',
  Middle = 'middle',
  Start = 'start'
}

export enum ImgixParamsTxtFit {
  Max = 'max'
}

/** Specifies how to filter by usage */
export type InUseFilter = {
  /** Search uploads that are currently used by some record or not */
  eq?: InputMaybe<Scalars['BooleanType']['input']>;
};

/** Specifies how to filter by ID */
export type ItemIdFilter = {
  /** Search the record with the specified ID */
  eq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Search records with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Exclude the record with the specified ID */
  neq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Search records that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
};

export enum ItemStatus {
  Draft = 'draft',
  Published = 'published',
  Updated = 'updated'
}

/** Block of type 9.2 Key Figure Item (key_figure_item) */
export type KeyFigureItemRecord = RecordInterface & {
  __typename?: 'KeyFigureItemRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  label?: Maybe<Scalars['String']['output']>;
  number?: Maybe<Scalars['IntType']['output']>;
};


/** Block of type 9.2 Key Figure Item (key_figure_item) */
export type KeyFigureItemRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type 9.1 Key Figure (key_figure) */
export type KeyFigureRecord = RecordInterface & {
  __typename?: 'KeyFigureRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  content: Array<KeyFigureItemRecord>;
  id: Scalars['ItemId']['output'];
};


/** Block of type 9.1 Key Figure (key_figure) */
export type KeyFigureRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Link External (link_external) */
export type LinkExternalRecord = RecordInterface & {
  __typename?: 'LinkExternalRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  label?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};


/** Block of type Link External (link_external) */
export type LinkExternalRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type LinkExternalRecordMultiLocaleField = {
  __typename?: 'LinkExternalRecordMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<LinkExternalRecord>;
};

/** Specifies how to filter Single-link fields */
export type LinkFilter = {
  /** Search for records with an exact match. The specified value must be a Record ID */
  eq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records linked to one of the specified records */
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Exclude records with an exact match. The specified value must be a Record ID */
  neq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Filter records not linked to one of the specified records */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
};

export type LinkInternalModelPageField = AboutItemRecord | AboutPageRecord | AnnualreportItemRecord | EmployeeItemRecord | EventItemRecord | HomePageRecord | NewsItemRecord | ProjectItemRecord | ProjectUpdateItemRecord | PublicationItemRecord | RegionItemRecord | RegionsPageRecord | TeamTagRecord | TopicItemRecord | TopicsPageRecord;

/** Block of type Link Internal (link_internal) */
export type LinkInternalRecord = RecordInterface & {
  __typename?: 'LinkInternalRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  label?: Maybe<Scalars['String']['output']>;
  page?: Maybe<LinkInternalModelPageField>;
};


/** Block of type Link Internal (link_internal) */
export type LinkInternalRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type LinksBlockModelLinksField = AboutItemRecord | AboutPageRecord | AnnualreportItemRecord | AnnualreportPageRecord | EmployeeItemRecord | EventItemRecord | HomePageRecord | NewsItemRecord | ProjectItemRecord | ProjectUpdateItemRecord | PublicationItemRecord | RegionItemRecord | RegionsPageRecord | TopicItemRecord | TopicsPageRecord;

export type LinksBlockModelTextField = {
  __typename?: 'LinksBlockModelTextField';
  blocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Block of type 10.1 Links (links_block) */
export type LinksBlockRecord = RecordInterface & {
  __typename?: 'LinksBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  links: Array<LinksBlockModelLinksField>;
  text?: Maybe<LinksBlockModelTextField>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Block of type 10.1 Links (links_block) */
export type LinksBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Multiple-links fields */
export type LinksFilter = {
  /** Filter records linked to all of the specified records. The specified values must be Record IDs */
  allIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Filter records linked to at least one of the specified records. The specified values must be Record IDs */
  anyIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Search for records with an exact match. The specified values must be Record IDs */
  eq?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records not linked to any of the specified records. The specified values must be Record IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
};

/** Block of type 7.2 List Media (list_media_link) */
export type ListMediaLinkRecord = RecordInterface & {
  __typename?: 'ListMediaLinkRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  list: Array<MediaLinkRecord>;
};


/** Block of type 7.2 List Media (list_media_link) */
export type ListMediaLinkRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type ListPublicationModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ListPublicationModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ListPublicationModelFilter>>>;
  id?: InputMaybe<ItemIdFilter>;
  list?: InputMaybe<LinksFilter>;
};

export type ListPublicationModelListField = EventItemRecord | NewsItemRecord | PublicationItemRecord;

/** Block of type 7.1 List Publication (list_publication) */
export type ListPublicationRecord = RecordInterface & {
  __typename?: 'ListPublicationRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  list: Array<ListPublicationModelListField>;
};


/** Block of type 7.1 List Publication (list_publication) */
export type ListPublicationRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by locale */
export type LocalesFilter = {
  /** Filter records that are localized in all the specified locales */
  allIn?: InputMaybe<Array<SiteLocale>>;
  /** Filter records that are localized in at least one of the specified locales */
  anyIn?: InputMaybe<Array<SiteLocale>>;
  /** Filter records that are not localized in any of the specified locales */
  notIn?: InputMaybe<Array<SiteLocale>>;
};

/** Block of type 3.4 Logo Gallery (logo_gallery) */
export type LogoGalleryRecord = RecordInterface & {
  __typename?: 'LogoGalleryRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  logoGallery: Array<ImageLinkRecord>;
};


/** Block of type 3.4 Logo Gallery (logo_gallery) */
export type LogoGalleryRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Media Link (media_link) */
export type MediaLinkRecord = RecordInterface & {
  __typename?: 'MediaLinkRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  link?: Maybe<Scalars['String']['output']>;
  publicationDate?: Maybe<Scalars['Date']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Block of type Media Link (media_link) */
export type MediaLinkRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type MetaItemModelBlocksField = ClusterRecord | ImageBreakerRecord | ImageSliderRecord | KeyFigureRecord | LinksBlockRecord | ListMediaLinkRecord | ListPublicationRecord | QuoteBlockRecord | SectionBlockRecord | TeaserContentRecord | TeaserGetInvolvedRecord | TeaserListRecord | TeaserTextRecord | TextAsideRecord | TextLeadAsideRecord | VideoAsideRecord | VideoFullRecord;

export type MetaItemModelBlocksFieldListListNonNullMultiLocaleField = {
  __typename?: 'MetaItemModelBlocksFieldListListNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Array<MetaItemModelBlocksField>;
};

export type MetaItemModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<MetaItemModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MetaItemModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  navigationTitle?: InputMaybe<StringFilter>;
  position?: InputMaybe<PositionFilter>;
  seoSocial?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
};

export enum MetaItemModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NavigationTitleAsc = 'navigationTitle_ASC',
  NavigationTitleDesc = 'navigationTitle_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Record of type 11 Meta Item (meta_item) */
export type MetaItemRecord = RecordInterface & {
  __typename?: 'MetaItemRecord';
  _allBlocksLocales?: Maybe<Array<MetaItemModelBlocksFieldListListNonNullMultiLocaleField>>;
  _allNavigationTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSeoSocialLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allSlugLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  blocks: Array<MetaItemModelBlocksField>;
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  navigationTitle?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['IntType']['output']>;
  seoSocial?: Maybe<SeoField>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Record of type 11 Meta Item (meta_item) */
export type MetaItemRecord_AllBlocksLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 11 Meta Item (meta_item) */
export type MetaItemRecord_AllNavigationTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 11 Meta Item (meta_item) */
export type MetaItemRecord_AllSeoSocialLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 11 Meta Item (meta_item) */
export type MetaItemRecord_AllSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 11 Meta Item (meta_item) */
export type MetaItemRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 11 Meta Item (meta_item) */
export type MetaItemRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 11 Meta Item (meta_item) */
export type MetaItemRecordBlocksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 11 Meta Item (meta_item) */
export type MetaItemRecordNavigationTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 11 Meta Item (meta_item) */
export type MetaItemRecordSeoSocialArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 11 Meta Item (meta_item) */
export type MetaItemRecordSlugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 11 Meta Item (meta_item) */
export type MetaItemRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export enum MuxThumbnailFormatType {
  Gif = 'gif',
  Jpg = 'jpg',
  Png = 'png'
}

export type NewsItemModelAuthorField = AuthorExternalRecord | AuthorInternalRecord;

export type NewsItemModelBlocksField = ImageSliderRecord | QuoteBlockRecord | QuoteInTextRecord | TextCenterRecord | TextLeadCenterRecord;

export type NewsItemModelBlocksFieldListListNonNullMultiLocaleField = {
  __typename?: 'NewsItemModelBlocksFieldListListNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Array<NewsItemModelBlocksField>;
};

export type NewsItemModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<NewsItemModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NewsItemModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  date?: InputMaybe<DateFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  navigationTitle?: InputMaybe<StringFilter>;
  parentPid?: InputMaybe<StringFilter>;
  project?: InputMaybe<LinkFilter>;
  region?: InputMaybe<LinkFilter>;
  seoSocial?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
  topic?: InputMaybe<LinksFilter>;
};

export type NewsItemModelLinkField = LinkExternalRecord | LinkInternalRecord;

export type NewsItemModelLinkFieldListListNonNullMultiLocaleField = {
  __typename?: 'NewsItemModelLinkFieldListListNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Array<NewsItemModelLinkField>;
};

export enum NewsItemModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NavigationTitleAsc = 'navigationTitle_ASC',
  NavigationTitleDesc = 'navigationTitle_DESC',
  ParentPidAsc = 'parentPid_ASC',
  ParentPidDesc = 'parentPid_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Record of type 8 News Item (news_item) */
export type NewsItemRecord = RecordInterface & {
  __typename?: 'NewsItemRecord';
  _allBlocksLocales?: Maybe<Array<NewsItemModelBlocksFieldListListNonNullMultiLocaleField>>;
  _allLinkLocales?: Maybe<Array<NewsItemModelLinkFieldListListNonNullMultiLocaleField>>;
  _allNavigationTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSeoSocialLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allSlugLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  author?: Maybe<NewsItemModelAuthorField>;
  blocks: Array<NewsItemModelBlocksField>;
  date?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  link: Array<NewsItemModelLinkField>;
  navigationTitle?: Maybe<Scalars['String']['output']>;
  parentPid?: Maybe<Scalars['String']['output']>;
  project?: Maybe<ProjectItemRecord>;
  region?: Maybe<RegionItemRecord>;
  seoSocial?: Maybe<SeoField>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topic: Array<TopicItemRecord>;
};


/** Record of type 8 News Item (news_item) */
export type NewsItemRecord_AllBlocksLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 8 News Item (news_item) */
export type NewsItemRecord_AllLinkLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 8 News Item (news_item) */
export type NewsItemRecord_AllNavigationTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 8 News Item (news_item) */
export type NewsItemRecord_AllSeoSocialLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 8 News Item (news_item) */
export type NewsItemRecord_AllSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 8 News Item (news_item) */
export type NewsItemRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 8 News Item (news_item) */
export type NewsItemRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 8 News Item (news_item) */
export type NewsItemRecordBlocksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 8 News Item (news_item) */
export type NewsItemRecordLinkArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 8 News Item (news_item) */
export type NewsItemRecordNavigationTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 8 News Item (news_item) */
export type NewsItemRecordSeoSocialArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 8 News Item (news_item) */
export type NewsItemRecordSlugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 8 News Item (news_item) */
export type NewsItemRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type 12 News Page (news_page) */
export type NewsPageRecord = RecordInterface & {
  __typename?: 'NewsPageRecord';
  _allNavigationTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSlugLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  navigationTitle?: Maybe<Scalars['String']['output']>;
  seoSocial?: Maybe<SeoField>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Record of type 12 News Page (news_page) */
export type NewsPageRecord_AllNavigationTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 12 News Page (news_page) */
export type NewsPageRecord_AllSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 12 News Page (news_page) */
export type NewsPageRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 12 News Page (news_page) */
export type NewsPageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 12 News Page (news_page) */
export type NewsPageRecordNavigationTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 12 News Page (news_page) */
export type NewsPageRecordSlugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 12 News Page (news_page) */
export type NewsPageRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by image orientation */
export type OrientationFilter = {
  /** Search uploads with the specified orientation */
  eq?: InputMaybe<UploadOrientation>;
  /** Exclude uploads with the specified orientation */
  neq?: InputMaybe<UploadOrientation>;
};

/** Specifies how to filter by position (sorted and tree-like collections) */
export type PositionFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

export type ProjectFactModelTextField = {
  __typename?: 'ProjectFactModelTextField';
  blocks: Array<Scalars['String']['output']>;
  links: Array<ProjectFactModelTextLinksField>;
  value: Scalars['JsonField']['output'];
};

export type ProjectFactModelTextLinksField = AboutItemRecord | AboutPageRecord | AnnualreportItemRecord | AnnualreportPageRecord | EmployeeItemRecord | EventItemRecord | HomePageRecord | MetaItemRecord | NewsItemRecord | ProjectItemRecord | ProjectUpdateItemRecord | PublicationItemRecord | RegionItemRecord | RegionsPageRecord | TopicItemRecord | TopicsPageRecord;

/** Block of type 11.2 Project Fact (project_fact) */
export type ProjectFactRecord = RecordInterface & {
  __typename?: 'ProjectFactRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  launchDate?: Maybe<Scalars['Date']['output']>;
  phase?: Maybe<StatusTagRecord>;
  text?: Maybe<ProjectFactModelTextField>;
};


/** Block of type 11.2 Project Fact (project_fact) */
export type ProjectFactRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type ProjectItemModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProjectItemModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProjectItemModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  launchDate?: InputMaybe<DateFilter>;
  navigationTitle?: InputMaybe<StringFilter>;
  ourObjectiveText?: InputMaybe<StructuredTextFilter>;
  parentPid?: InputMaybe<StringFilter>;
  phase?: InputMaybe<LinkFilter>;
  position?: InputMaybe<PositionFilter>;
  projectLead?: InputMaybe<LinkFilter>;
  region?: InputMaybe<LinkFilter>;
  seoSocial?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  solutionScape?: InputMaybe<LinkFilter>;
  summaryText?: InputMaybe<StructuredTextFilter>;
  title?: InputMaybe<StringFilter>;
  topics?: InputMaybe<LinksFilter>;
};

export enum ProjectItemModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LaunchDateAsc = 'launchDate_ASC',
  LaunchDateDesc = 'launchDate_DESC',
  NavigationTitleAsc = 'navigationTitle_ASC',
  NavigationTitleDesc = 'navigationTitle_DESC',
  ParentPidAsc = 'parentPid_ASC',
  ParentPidDesc = 'parentPid_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ProjectItemModelOurObjectiveTextField = {
  __typename?: 'ProjectItemModelOurObjectiveTextField';
  blocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

export type ProjectItemModelOurObjectiveTextFieldMultiLocaleField = {
  __typename?: 'ProjectItemModelOurObjectiveTextFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<ProjectItemModelOurObjectiveTextField>;
};

export type ProjectItemModelSummaryTextField = {
  __typename?: 'ProjectItemModelSummaryTextField';
  blocks: Array<Scalars['String']['output']>;
  links: Array<ProjectItemModelSummaryTextLinksField>;
  value: Scalars['JsonField']['output'];
};

export type ProjectItemModelSummaryTextFieldMultiLocaleField = {
  __typename?: 'ProjectItemModelSummaryTextFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<ProjectItemModelSummaryTextField>;
};

export type ProjectItemModelSummaryTextLinksField = AboutItemRecord | AboutPageRecord | AnnualreportItemRecord | AnnualreportPageRecord | EmployeeItemRecord | EventItemRecord | HomePageRecord | MetaItemRecord | NewsItemRecord | ProjectItemRecord | ProjectUpdateItemRecord | PublicationItemRecord | RegionItemRecord | RegionsPageRecord | TopicItemRecord | TopicsPageRecord;

/** Record of type 4 Project Item (project_item) */
export type ProjectItemRecord = RecordInterface & {
  __typename?: 'ProjectItemRecord';
  _allNavigationTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allOurObjectiveTextLocales?: Maybe<Array<ProjectItemModelOurObjectiveTextFieldMultiLocaleField>>;
  _allSlugLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSummaryTextLocales?: Maybe<Array<ProjectItemModelSummaryTextFieldMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  launchDate?: Maybe<Scalars['Date']['output']>;
  navigationTitle?: Maybe<Scalars['String']['output']>;
  ourObjectiveText?: Maybe<ProjectItemModelOurObjectiveTextField>;
  parentPid?: Maybe<Scalars['String']['output']>;
  phase?: Maybe<StatusTagRecord>;
  position?: Maybe<Scalars['IntType']['output']>;
  projectLead?: Maybe<EmployeeItemRecord>;
  region?: Maybe<RegionItemRecord>;
  seoSocial?: Maybe<SeoField>;
  slug?: Maybe<Scalars['String']['output']>;
  solutionScape?: Maybe<SolutionscapeTagRecord>;
  summaryText?: Maybe<ProjectItemModelSummaryTextField>;
  title?: Maybe<Scalars['String']['output']>;
  topics: Array<TopicItemRecord>;
};


/** Record of type 4 Project Item (project_item) */
export type ProjectItemRecord_AllNavigationTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 4 Project Item (project_item) */
export type ProjectItemRecord_AllOurObjectiveTextLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 4 Project Item (project_item) */
export type ProjectItemRecord_AllSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 4 Project Item (project_item) */
export type ProjectItemRecord_AllSummaryTextLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 4 Project Item (project_item) */
export type ProjectItemRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 4 Project Item (project_item) */
export type ProjectItemRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 4 Project Item (project_item) */
export type ProjectItemRecordNavigationTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 4 Project Item (project_item) */
export type ProjectItemRecordOurObjectiveTextArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 4 Project Item (project_item) */
export type ProjectItemRecordSlugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 4 Project Item (project_item) */
export type ProjectItemRecordSummaryTextArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 4 Project Item (project_item) */
export type ProjectItemRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type ProjectSummaryModelTextField = {
  __typename?: 'ProjectSummaryModelTextField';
  blocks: Array<Scalars['String']['output']>;
  links: Array<ProjectSummaryModelTextLinksField>;
  value: Scalars['JsonField']['output'];
};

export type ProjectSummaryModelTextLinksField = AboutItemRecord | AboutPageRecord | AnnualreportItemRecord | AnnualreportPageRecord | EmployeeItemRecord | EventItemRecord | HomePageRecord | MetaItemRecord | NewsItemRecord | ProjectItemRecord | ProjectUpdateItemRecord | PublicationItemRecord | RegionItemRecord | RegionsPageRecord | TopicItemRecord | TopicsPageRecord;

/** Block of type 11.1 Project Summary (project_summary) */
export type ProjectSummaryRecord = RecordInterface & {
  __typename?: 'ProjectSummaryRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  text?: Maybe<ProjectSummaryModelTextField>;
};


/** Block of type 11.1 Project Summary (project_summary) */
export type ProjectSummaryRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type ProjectUpdateItemModelAuthorField = AuthorExternalRecord | AuthorInternalRecord;

export type ProjectUpdateItemModelBlocksField = ImageSliderRecord | QuoteBlockRecord | QuoteInTextRecord | TextCenterRecord | TextLeadCenterRecord;

export type ProjectUpdateItemModelBlocksFieldListListNonNullMultiLocaleField = {
  __typename?: 'ProjectUpdateItemModelBlocksFieldListListNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Array<ProjectUpdateItemModelBlocksField>;
};

export type ProjectUpdateItemModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProjectUpdateItemModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProjectUpdateItemModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  date?: InputMaybe<DateFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  navigationTitle?: InputMaybe<StringFilter>;
  parentPid?: InputMaybe<StringFilter>;
  position?: InputMaybe<PositionFilter>;
  project?: InputMaybe<LinkFilter>;
  seoSocial?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
};

export enum ProjectUpdateItemModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NavigationTitleAsc = 'navigationTitle_ASC',
  NavigationTitleDesc = 'navigationTitle_DESC',
  ParentPidAsc = 'parentPid_ASC',
  ParentPidDesc = 'parentPid_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Record of type 5 Project Update Item (project_update_item) */
export type ProjectUpdateItemRecord = RecordInterface & {
  __typename?: 'ProjectUpdateItemRecord';
  _allBlocksLocales?: Maybe<Array<ProjectUpdateItemModelBlocksFieldListListNonNullMultiLocaleField>>;
  _allNavigationTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSeoSocialLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allSlugLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  author?: Maybe<ProjectUpdateItemModelAuthorField>;
  blocks: Array<ProjectUpdateItemModelBlocksField>;
  date?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  navigationTitle?: Maybe<Scalars['String']['output']>;
  parentPid?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['IntType']['output']>;
  project?: Maybe<ProjectItemRecord>;
  seoSocial?: Maybe<SeoField>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Record of type 5 Project Update Item (project_update_item) */
export type ProjectUpdateItemRecord_AllBlocksLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 5 Project Update Item (project_update_item) */
export type ProjectUpdateItemRecord_AllNavigationTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 5 Project Update Item (project_update_item) */
export type ProjectUpdateItemRecord_AllSeoSocialLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 5 Project Update Item (project_update_item) */
export type ProjectUpdateItemRecord_AllSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 5 Project Update Item (project_update_item) */
export type ProjectUpdateItemRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 5 Project Update Item (project_update_item) */
export type ProjectUpdateItemRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 5 Project Update Item (project_update_item) */
export type ProjectUpdateItemRecordBlocksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 5 Project Update Item (project_update_item) */
export type ProjectUpdateItemRecordNavigationTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 5 Project Update Item (project_update_item) */
export type ProjectUpdateItemRecordSeoSocialArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 5 Project Update Item (project_update_item) */
export type ProjectUpdateItemRecordSlugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 5 Project Update Item (project_update_item) */
export type ProjectUpdateItemRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type PublicationItemModelAuthorsField = AuthorExternalRecord | AuthorInternalRecord;

export type PublicationItemModelContentBlocksField = ImageSliderRecord | QuoteBlockRecord | QuoteInTextRecord | TextCenterRecord | TextLeadCenterRecord;

export type PublicationItemModelContentBlocksFieldListListNonNullMultiLocaleField = {
  __typename?: 'PublicationItemModelContentBlocksFieldListListNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Array<PublicationItemModelContentBlocksField>;
};

export type PublicationItemModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<PublicationItemModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PublicationItemModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  belongsTo?: InputMaybe<LinkFilter>;
  date?: InputMaybe<DateFilter>;
  id?: InputMaybe<ItemIdFilter>;
  navigationTitle?: InputMaybe<StringFilter>;
  parentPid?: InputMaybe<StringFilter>;
  project?: InputMaybe<LinkFilter>;
  publicationType?: InputMaybe<LinkFilter>;
  region?: InputMaybe<LinkFilter>;
  seoSocial?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  text?: InputMaybe<TextFilter>;
  title?: InputMaybe<StringFilter>;
};

export type PublicationItemModelLinksField = LinkExternalRecord | LinkInternalRecord;

export type PublicationItemModelLinksFieldListListNonNullMultiLocaleField = {
  __typename?: 'PublicationItemModelLinksFieldListListNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Array<PublicationItemModelLinksField>;
};

export enum PublicationItemModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NavigationTitleAsc = 'navigationTitle_ASC',
  NavigationTitleDesc = 'navigationTitle_DESC',
  ParentPidAsc = 'parentPid_ASC',
  ParentPidDesc = 'parentPid_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Record of type 10 Publication Item (publication_item) */
export type PublicationItemRecord = RecordInterface & {
  __typename?: 'PublicationItemRecord';
  _allContentBlocksLocales?: Maybe<Array<PublicationItemModelContentBlocksFieldListListNonNullMultiLocaleField>>;
  _allLinksLocales?: Maybe<Array<PublicationItemModelLinksFieldListListNonNullMultiLocaleField>>;
  _allNavigationTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSeoSocialLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allSlugLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTextLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  authors: Array<PublicationItemModelAuthorsField>;
  belongsTo?: Maybe<TopicItemRecord>;
  contentBlocks: Array<PublicationItemModelContentBlocksField>;
  date?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ItemId']['output'];
  links: Array<PublicationItemModelLinksField>;
  navigationTitle?: Maybe<Scalars['String']['output']>;
  parentPid?: Maybe<Scalars['String']['output']>;
  project?: Maybe<ProjectItemRecord>;
  publicationType?: Maybe<PublicationTagRecord>;
  region?: Maybe<RegionItemRecord>;
  seoSocial?: Maybe<SeoField>;
  slug?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Record of type 10 Publication Item (publication_item) */
export type PublicationItemRecord_AllContentBlocksLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 10 Publication Item (publication_item) */
export type PublicationItemRecord_AllLinksLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 10 Publication Item (publication_item) */
export type PublicationItemRecord_AllNavigationTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 10 Publication Item (publication_item) */
export type PublicationItemRecord_AllSeoSocialLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 10 Publication Item (publication_item) */
export type PublicationItemRecord_AllSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 10 Publication Item (publication_item) */
export type PublicationItemRecord_AllTextLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type 10 Publication Item (publication_item) */
export type PublicationItemRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 10 Publication Item (publication_item) */
export type PublicationItemRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 10 Publication Item (publication_item) */
export type PublicationItemRecordContentBlocksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 10 Publication Item (publication_item) */
export type PublicationItemRecordLinksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 10 Publication Item (publication_item) */
export type PublicationItemRecordNavigationTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 10 Publication Item (publication_item) */
export type PublicationItemRecordSeoSocialArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 10 Publication Item (publication_item) */
export type PublicationItemRecordSlugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 10 Publication Item (publication_item) */
export type PublicationItemRecordTextArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type 10 Publication Item (publication_item) */
export type PublicationItemRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type PublicationTagModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<PublicationTagModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PublicationTagModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
};

export enum PublicationTagModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Record of type Publication Tag (publication_tag) */
export type PublicationTagRecord = RecordInterface & {
  __typename?: 'PublicationTagRecord';
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Record of type Publication Tag (publication_tag) */
export type PublicationTagRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Publication Tag (publication_tag) */
export type PublicationTagRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Publication Tag (publication_tag) */
export type PublicationTagRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type PublicationsPageModelIntroductionField = {
  __typename?: 'PublicationsPageModelIntroductionField';
  blocks: Array<Scalars['String']['output']>;
  links: Array<PublicationsPageModelIntroductionLinksField>;
  value: Scalars['JsonField']['output'];
};

export type PublicationsPageModelIntroductionFieldMultiLocaleField = {
  __typename?: 'PublicationsPageModelIntroductionFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<PublicationsPageModelIntroductionField>;
};

export type PublicationsPageModelIntroductionLinksField = AboutItemRecord | AboutPageRecord | AnnualreportItemRecord | AnnualreportPageRecord | EmployeeItemRecord | EventItemRecord | HomePageRecord | MetaItemRecord | NewsItemRecord | ProjectItemRecord | ProjectUpdateItemRecord | PublicationItemRecord | RegionItemRecord | RegionsPageRecord | TopicItemRecord | TopicsPageRecord;

/** Record of type 14 Publications Page (publications_page) */
export type PublicationsPageRecord = RecordInterface & {
  __typename?: 'PublicationsPageRecord';
  _allIntroductionLocales?: Maybe<Array<PublicationsPageModelIntroductionFieldMultiLocaleField>>;
  _allNavigationTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSlugLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  introduction?: Maybe<PublicationsPageModelIntroductionField>;
  navigationTitle?: Maybe<Scalars['String']['output']>;
  seoSocial?: Maybe<SeoField>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Record of type 14 Publications Page (publications_page) */
export type PublicationsPageRecord_AllIntroductionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 14 Publications Page (publications_page) */
export type PublicationsPageRecord_AllNavigationTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 14 Publications Page (publications_page) */
export type PublicationsPageRecord_AllSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 14 Publications Page (publications_page) */
export type PublicationsPageRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 14 Publications Page (publications_page) */
export type PublicationsPageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 14 Publications Page (publications_page) */
export type PublicationsPageRecordIntroductionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 14 Publications Page (publications_page) */
export type PublicationsPageRecordNavigationTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 14 Publications Page (publications_page) */
export type PublicationsPageRecordSlugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 14 Publications Page (publications_page) */
export type PublicationsPageRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by publication datetime */
export type PublishedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** The query root for this schema */
export type Query = {
  __typename?: 'Query';
  /** Returns meta information regarding a record collection */
  _allAboutItemsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allAnnualreportItemsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allEmployeeItemsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allEventItemsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allMetaItemsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allNewsItemsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allProjectItemsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allProjectUpdateItemsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allPublicationItemsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allPublicationTagsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allRegionItemsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allRegionTagsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allSolutionscapeTagsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allStatusTagsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allTeamTagsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allTooltipsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allTopicItemsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allUiTextsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allUnitTagsMeta: CollectionMetadata;
  /** Returns meta information regarding an assets collection */
  _allUploadsMeta: CollectionMetadata;
  /** Returns the single instance record */
  _site: Site;
  /** Returns a specific record */
  aboutItem?: Maybe<AboutItemRecord>;
  /** Returns the single instance record */
  aboutPage?: Maybe<AboutPageRecord>;
  /** Returns a collection of records */
  allAboutItems: Array<AboutItemRecord>;
  /** Returns a collection of records */
  allAnnualreportItems: Array<AnnualreportItemRecord>;
  /** Returns a collection of records */
  allEmployeeItems: Array<EmployeeItemRecord>;
  /** Returns a collection of records */
  allEventItems: Array<EventItemRecord>;
  /** Returns a collection of records */
  allMetaItems: Array<MetaItemRecord>;
  /** Returns a collection of records */
  allNewsItems: Array<NewsItemRecord>;
  /** Returns a collection of records */
  allProjectItems: Array<ProjectItemRecord>;
  /** Returns a collection of records */
  allProjectUpdateItems: Array<ProjectUpdateItemRecord>;
  /** Returns a collection of records */
  allPublicationItems: Array<PublicationItemRecord>;
  /** Returns a collection of records */
  allPublicationTags: Array<PublicationTagRecord>;
  /** Returns a collection of records */
  allRegionItems: Array<RegionItemRecord>;
  /** Returns a collection of records */
  allRegionTags: Array<RegionTagRecord>;
  /** Returns a collection of records */
  allSolutionscapeTags: Array<SolutionscapeTagRecord>;
  /** Returns a collection of records */
  allStatusTags: Array<StatusTagRecord>;
  /** Returns a collection of records */
  allTeamTags: Array<TeamTagRecord>;
  /** Returns a collection of records */
  allTooltips: Array<TooltipRecord>;
  /** Returns a collection of records */
  allTopicItems: Array<TopicItemRecord>;
  /** Returns a collection of records */
  allUiTexts: Array<UiTextRecord>;
  /** Returns a collection of records */
  allUnitTags: Array<UnitTagRecord>;
  /** Returns a collection of assets */
  allUploads: Array<FileField>;
  /** Returns a specific record */
  annualreportItem?: Maybe<AnnualreportItemRecord>;
  /** Returns the single instance record */
  annualreportPage?: Maybe<AnnualreportPageRecord>;
  /** Returns the single instance record */
  cookie?: Maybe<CookieRecord>;
  /** Returns a specific record */
  employeeItem?: Maybe<EmployeeItemRecord>;
  /** Returns a specific record */
  eventItem?: Maybe<EventItemRecord>;
  /** Returns the single instance record */
  eventsPage?: Maybe<EventsPageRecord>;
  /** Returns the single instance record */
  footer?: Maybe<FooterRecord>;
  /** Returns the single instance record */
  homePage?: Maybe<HomePageRecord>;
  /** Returns a specific record */
  metaItem?: Maybe<MetaItemRecord>;
  /** Returns a specific record */
  newsItem?: Maybe<NewsItemRecord>;
  /** Returns the single instance record */
  newsPage?: Maybe<NewsPageRecord>;
  /** Returns a specific record */
  projectItem?: Maybe<ProjectItemRecord>;
  /** Returns a specific record */
  projectUpdateItem?: Maybe<ProjectUpdateItemRecord>;
  /** Returns a specific record */
  publicationItem?: Maybe<PublicationItemRecord>;
  /** Returns a specific record */
  publicationTag?: Maybe<PublicationTagRecord>;
  /** Returns the single instance record */
  publicationsPage?: Maybe<PublicationsPageRecord>;
  /** Returns a specific record */
  regionItem?: Maybe<RegionItemRecord>;
  /** Returns a specific record */
  regionTag?: Maybe<RegionTagRecord>;
  /** Returns the single instance record */
  regionsPage?: Maybe<RegionsPageRecord>;
  /** Returns the single instance record */
  search?: Maybe<SearchRecord>;
  /** Returns a specific record */
  solutionscapeTag?: Maybe<SolutionscapeTagRecord>;
  /** Returns a specific record */
  statusTag?: Maybe<StatusTagRecord>;
  /** Returns a specific record */
  teamTag?: Maybe<TeamTagRecord>;
  /** Returns a specific record */
  tooltip?: Maybe<TooltipRecord>;
  /** Returns a specific record */
  topicItem?: Maybe<TopicItemRecord>;
  /** Returns the single instance record */
  topicsPage?: Maybe<TopicsPageRecord>;
  /** Returns a specific record */
  uiText?: Maybe<UiTextRecord>;
  /** Returns a specific record */
  unitTag?: Maybe<UnitTagRecord>;
  /** Returns a specific asset */
  upload?: Maybe<FileField>;
};


/** The query root for this schema */
export type Query_AllAboutItemsMetaArgs = {
  filter?: InputMaybe<AboutItemModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllAnnualreportItemsMetaArgs = {
  filter?: InputMaybe<AnnualreportItemModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllEmployeeItemsMetaArgs = {
  filter?: InputMaybe<EmployeeItemModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllEventItemsMetaArgs = {
  filter?: InputMaybe<EventItemModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllMetaItemsMetaArgs = {
  filter?: InputMaybe<MetaItemModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllNewsItemsMetaArgs = {
  filter?: InputMaybe<NewsItemModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllProjectItemsMetaArgs = {
  filter?: InputMaybe<ProjectItemModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllProjectUpdateItemsMetaArgs = {
  filter?: InputMaybe<ProjectUpdateItemModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllPublicationItemsMetaArgs = {
  filter?: InputMaybe<PublicationItemModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllPublicationTagsMetaArgs = {
  filter?: InputMaybe<PublicationTagModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllRegionItemsMetaArgs = {
  filter?: InputMaybe<RegionItemModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllRegionTagsMetaArgs = {
  filter?: InputMaybe<RegionTagModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllSolutionscapeTagsMetaArgs = {
  filter?: InputMaybe<SolutionscapeTagModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllStatusTagsMetaArgs = {
  filter?: InputMaybe<StatusTagModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllTeamTagsMetaArgs = {
  filter?: InputMaybe<TeamTagModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllTooltipsMetaArgs = {
  filter?: InputMaybe<TooltipModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllTopicItemsMetaArgs = {
  filter?: InputMaybe<TopicItemModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllUiTextsMetaArgs = {
  filter?: InputMaybe<UiTextModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllUnitTagsMetaArgs = {
  filter?: InputMaybe<UnitTagModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllUploadsMetaArgs = {
  filter?: InputMaybe<UploadFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_SiteArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryAboutItemArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AboutItemModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AboutItemModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryAboutPageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryAllAboutItemsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AboutItemModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AboutItemModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllAnnualreportItemsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AnnualreportItemModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AnnualreportItemModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllEmployeeItemsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<EmployeeItemModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<EmployeeItemModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllEventItemsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<EventItemModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<EventItemModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllMetaItemsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MetaItemModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MetaItemModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllNewsItemsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NewsItemModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<NewsItemModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllProjectItemsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProjectItemModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProjectItemModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllProjectUpdateItemsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProjectUpdateItemModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProjectUpdateItemModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllPublicationItemsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PublicationItemModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PublicationItemModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllPublicationTagsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PublicationTagModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PublicationTagModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllRegionItemsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<RegionItemModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<RegionItemModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllRegionTagsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<RegionTagModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<RegionTagModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllSolutionscapeTagsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SolutionscapeTagModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SolutionscapeTagModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllStatusTagsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<StatusTagModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<StatusTagModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllTeamTagsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TeamTagModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TeamTagModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllTooltipsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TooltipModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TooltipModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllTopicItemsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TopicItemModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TopicItemModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllUiTextsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UiTextModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UiTextModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllUnitTagsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UnitTagModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UnitTagModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllUploadsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UploadFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAnnualreportItemArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AnnualreportItemModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AnnualreportItemModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryAnnualreportPageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryCookieArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryEmployeeItemArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<EmployeeItemModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<EmployeeItemModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryEventItemArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<EventItemModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<EventItemModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryEventsPageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryFooterArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryHomePageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryMetaItemArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MetaItemModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MetaItemModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryNewsItemArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NewsItemModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<NewsItemModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryNewsPageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryProjectItemArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProjectItemModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProjectItemModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryProjectUpdateItemArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProjectUpdateItemModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProjectUpdateItemModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryPublicationItemArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PublicationItemModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PublicationItemModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryPublicationTagArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PublicationTagModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PublicationTagModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryPublicationsPageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryRegionItemArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<RegionItemModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<RegionItemModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryRegionTagArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<RegionTagModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<RegionTagModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryRegionsPageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QuerySearchArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QuerySolutionscapeTagArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SolutionscapeTagModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SolutionscapeTagModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryStatusTagArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<StatusTagModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<StatusTagModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryTeamTagArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TeamTagModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TeamTagModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryTooltipArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TooltipModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TooltipModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryTopicItemArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TopicItemModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TopicItemModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryTopicsPageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryUiTextArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UiTextModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UiTextModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryUnitTagArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UnitTagModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UnitTagModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryUploadArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UploadFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
};

export type QuoteBlockModelAuthorField = AuthorExternalRecord | AuthorInternalRecord;

export type QuoteBlockModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<QuoteBlockModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<QuoteBlockModelFilter>>>;
  id?: InputMaybe<ItemIdFilter>;
  quoteText?: InputMaybe<TextFilter>;
};

/** Block of type 2.2 Quote Block (quote_block) */
export type QuoteBlockRecord = RecordInterface & {
  __typename?: 'QuoteBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  author?: Maybe<QuoteBlockModelAuthorField>;
  id: Scalars['ItemId']['output'];
  quoteText?: Maybe<Scalars['String']['output']>;
};


/** Block of type 2.2 Quote Block (quote_block) */
export type QuoteBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type 2.2 Quote Block (quote_block) */
export type QuoteBlockRecordQuoteTextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type 2.1 Quote Inline (quote_in_text) */
export type QuoteInTextRecord = RecordInterface & {
  __typename?: 'QuoteInTextRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  author?: Maybe<EmployeeItemRecord>;
  id: Scalars['ItemId']['output'];
  quoteText?: Maybe<Scalars['String']['output']>;
};


/** Block of type 2.1 Quote Inline (quote_in_text) */
export type QuoteInTextRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type 2.1 Quote Inline (quote_in_text) */
export type QuoteInTextRecordQuoteTextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RecordInterface = {
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
};


export type RecordInterface_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type RegionItemModelExplorerlandTextField = {
  __typename?: 'RegionItemModelExplorerlandTextField';
  blocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

export type RegionItemModelExplorerlandTextFieldMultiLocaleField = {
  __typename?: 'RegionItemModelExplorerlandTextFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<RegionItemModelExplorerlandTextField>;
};

export type RegionItemModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<RegionItemModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<RegionItemModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  explorerlandLink?: InputMaybe<StringFilter>;
  explorerlandText?: InputMaybe<StructuredTextFilter>;
  icon?: InputMaybe<FileFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  navigationTitle?: InputMaybe<StringFilter>;
  parentPid?: InputMaybe<StringFilter>;
  position?: InputMaybe<PositionFilter>;
  projectLead?: InputMaybe<LinkFilter>;
  seoSocial?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  subtitle?: InputMaybe<TextFilter>;
  teamMembers?: InputMaybe<LinksFilter>;
  text?: InputMaybe<StructuredTextFilter>;
  title?: InputMaybe<StringFilter>;
};

export enum RegionItemModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  ExplorerlandLinkAsc = 'explorerlandLink_ASC',
  ExplorerlandLinkDesc = 'explorerlandLink_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NavigationTitleAsc = 'navigationTitle_ASC',
  NavigationTitleDesc = 'navigationTitle_DESC',
  ParentPidAsc = 'parentPid_ASC',
  ParentPidDesc = 'parentPid_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type RegionItemModelTextField = {
  __typename?: 'RegionItemModelTextField';
  blocks: Array<Scalars['String']['output']>;
  links: Array<RegionItemModelTextLinksField>;
  value: Scalars['JsonField']['output'];
};

export type RegionItemModelTextFieldMultiLocaleField = {
  __typename?: 'RegionItemModelTextFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<RegionItemModelTextField>;
};

export type RegionItemModelTextLinksField = AboutItemRecord | AboutPageRecord | AnnualreportItemRecord | AnnualreportPageRecord | EmployeeItemRecord | EventItemRecord | HomePageRecord | MetaItemRecord | NewsItemRecord | ProjectItemRecord | ProjectUpdateItemRecord | PublicationItemRecord | RegionItemRecord | RegionsPageRecord | TopicItemRecord | TopicsPageRecord;

/** Record of type 3 Region Item (region_item) */
export type RegionItemRecord = RecordInterface & {
  __typename?: 'RegionItemRecord';
  _allExplorerlandTextLocales?: Maybe<Array<RegionItemModelExplorerlandTextFieldMultiLocaleField>>;
  _allNavigationTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSlugLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSubtitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTextLocales?: Maybe<Array<RegionItemModelTextFieldMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  explorerlandLink?: Maybe<Scalars['String']['output']>;
  explorerlandText?: Maybe<RegionItemModelExplorerlandTextField>;
  icon?: Maybe<FileField>;
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  navigationTitle?: Maybe<Scalars['String']['output']>;
  parentPid?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['IntType']['output']>;
  projectLead?: Maybe<EmployeeItemRecord>;
  seoSocial?: Maybe<SeoField>;
  slug?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  teamMembers: Array<EmployeeItemRecord>;
  text?: Maybe<RegionItemModelTextField>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Record of type 3 Region Item (region_item) */
export type RegionItemRecord_AllExplorerlandTextLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 3 Region Item (region_item) */
export type RegionItemRecord_AllNavigationTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 3 Region Item (region_item) */
export type RegionItemRecord_AllSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 3 Region Item (region_item) */
export type RegionItemRecord_AllSubtitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type 3 Region Item (region_item) */
export type RegionItemRecord_AllTextLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 3 Region Item (region_item) */
export type RegionItemRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 3 Region Item (region_item) */
export type RegionItemRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 3 Region Item (region_item) */
export type RegionItemRecordExplorerlandTextArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 3 Region Item (region_item) */
export type RegionItemRecordNavigationTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 3 Region Item (region_item) */
export type RegionItemRecordSlugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 3 Region Item (region_item) */
export type RegionItemRecordSubtitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type 3 Region Item (region_item) */
export type RegionItemRecordTextArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 3 Region Item (region_item) */
export type RegionItemRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type RegionTagModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<RegionTagModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<RegionTagModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
};

export enum RegionTagModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Record of type Region Tag (region_tag) */
export type RegionTagRecord = RecordInterface & {
  __typename?: 'RegionTagRecord';
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Record of type Region Tag (region_tag) */
export type RegionTagRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Region Tag (region_tag) */
export type RegionTagRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Region Tag (region_tag) */
export type RegionTagRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type RegionsPageModelIntroductionField = {
  __typename?: 'RegionsPageModelIntroductionField';
  blocks: Array<Scalars['String']['output']>;
  links: Array<RegionsPageModelIntroductionLinksField>;
  value: Scalars['JsonField']['output'];
};

export type RegionsPageModelIntroductionFieldMultiLocaleField = {
  __typename?: 'RegionsPageModelIntroductionFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<RegionsPageModelIntroductionField>;
};

export type RegionsPageModelIntroductionLinksField = AboutItemRecord | AboutPageRecord | AnnualreportItemRecord | AnnualreportPageRecord | EmployeeItemRecord | EventItemRecord | HomePageRecord | MetaItemRecord | NewsItemRecord | ProjectItemRecord | ProjectUpdateItemRecord | PublicationItemRecord | RegionItemRecord | RegionsPageRecord | TopicItemRecord | TopicsPageRecord;

/** Record of type 3 Regions Page (regions_page) */
export type RegionsPageRecord = RecordInterface & {
  __typename?: 'RegionsPageRecord';
  _allIntroductionLocales?: Maybe<Array<RegionsPageModelIntroductionFieldMultiLocaleField>>;
  _allNavigationTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSeoSocialLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allSlugLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  introduction?: Maybe<RegionsPageModelIntroductionField>;
  navigationTitle?: Maybe<Scalars['String']['output']>;
  seoSocial?: Maybe<SeoField>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Record of type 3 Regions Page (regions_page) */
export type RegionsPageRecord_AllIntroductionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 3 Regions Page (regions_page) */
export type RegionsPageRecord_AllNavigationTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 3 Regions Page (regions_page) */
export type RegionsPageRecord_AllSeoSocialLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 3 Regions Page (regions_page) */
export type RegionsPageRecord_AllSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 3 Regions Page (regions_page) */
export type RegionsPageRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 3 Regions Page (regions_page) */
export type RegionsPageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 3 Regions Page (regions_page) */
export type RegionsPageRecordIntroductionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 3 Regions Page (regions_page) */
export type RegionsPageRecordNavigationTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 3 Regions Page (regions_page) */
export type RegionsPageRecordSeoSocialArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 3 Regions Page (regions_page) */
export type RegionsPageRecordSlugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 3 Regions Page (regions_page) */
export type RegionsPageRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by upload type */
export type ResolutionFilter = {
  /** Search uploads with the specified resolution */
  eq?: InputMaybe<ResolutionType>;
  /** Search uploads with the specified resolutions */
  in?: InputMaybe<Array<InputMaybe<ResolutionType>>>;
  /** Exclude uploads with the specified resolution */
  neq?: InputMaybe<ResolutionType>;
  /** Search uploads without the specified resolutions */
  notIn?: InputMaybe<Array<InputMaybe<ResolutionType>>>;
};

export enum ResolutionType {
  Icon = 'icon',
  Large = 'large',
  Medium = 'medium',
  Small = 'small'
}

export type ResponsiveImage = {
  __typename?: 'ResponsiveImage';
  alt?: Maybe<Scalars['String']['output']>;
  aspectRatio: Scalars['FloatType']['output'];
  base64?: Maybe<Scalars['String']['output']>;
  bgColor?: Maybe<Scalars['String']['output']>;
  height: Scalars['IntType']['output'];
  sizes: Scalars['String']['output'];
  src: Scalars['String']['output'];
  srcSet: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  webpSrcSet: Scalars['String']['output'];
  width: Scalars['IntType']['output'];
};

/** Record of type Search (search) */
export type SearchRecord = RecordInterface & {
  __typename?: 'SearchRecord';
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  title?: Maybe<Scalars['String']['output']>;
};


/** Record of type Search (search) */
export type SearchRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Search (search) */
export type SearchRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Search (search) */
export type SearchRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type SectionBlockModelBlocksField = ImageSliderRecord | KeyFigureRecord | ListPublicationRecord | LogoGalleryRecord | QuoteBlockRecord | QuoteInTextRecord | TeaserContentRecord | TextCenterRecord | TextLeadCenterRecord;

export type SectionBlockModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<SectionBlockModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SectionBlockModelFilter>>>;
  id?: InputMaybe<ItemIdFilter>;
  identifier?: InputMaybe<SlugFilter>;
  sectionTitle?: InputMaybe<StringFilter>;
  titleIsHidden?: InputMaybe<BooleanFilter>;
};

/** Block of type 5.1 Section Block (section_block) */
export type SectionBlockRecord = RecordInterface & {
  __typename?: 'SectionBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  blocks: Array<SectionBlockModelBlocksField>;
  id: Scalars['ItemId']['output'];
  identifier?: Maybe<Scalars['String']['output']>;
  sectionTitle?: Maybe<Scalars['String']['output']>;
  titleIsHidden: Scalars['BooleanType']['output'];
};


/** Block of type 5.1 Section Block (section_block) */
export type SectionBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type SeoField = {
  __typename?: 'SeoField';
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<FileField>;
  noIndex?: Maybe<Scalars['BooleanType']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  twitterCard?: Maybe<Scalars['String']['output']>;
};

export type SeoFieldMultiLocaleField = {
  __typename?: 'SeoFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<SeoField>;
};

/** Specifies how to filter SEO meta tags fields */
export type SeoFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
};

export type Site = {
  __typename?: 'Site';
  favicon?: Maybe<FileField>;
  faviconMetaTags: Array<Tag>;
  globalSeo?: Maybe<GlobalSeoField>;
  locales: Array<SiteLocale>;
  noIndex?: Maybe<Scalars['BooleanType']['output']>;
};


export type SiteFaviconMetaTagsArgs = {
  variants?: InputMaybe<Array<InputMaybe<FaviconType>>>;
};


export type SiteGlobalSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export enum SiteLocale {
  De = 'de',
  En = 'en',
  Es = 'es'
}

/** Specifies how to filter Slug fields */
export type SlugFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filter records that have one of the specified slugs */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Filter records that do have one of the specified slugs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SolutionscapeTagModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<SolutionscapeTagModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SolutionscapeTagModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  linkUrl?: InputMaybe<StringFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
};

export enum SolutionscapeTagModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LinkUrlAsc = 'linkUrl_ASC',
  LinkUrlDesc = 'linkUrl_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Record of type Solutionscape Tag (solutionscape_tag) */
export type SolutionscapeTagRecord = RecordInterface & {
  __typename?: 'SolutionscapeTagRecord';
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  linkUrl?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Record of type Solutionscape Tag (solutionscape_tag) */
export type SolutionscapeTagRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Solutionscape Tag (solutionscape_tag) */
export type SolutionscapeTagRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Solutionscape Tag (solutionscape_tag) */
export type SolutionscapeTagRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by status */
export type StatusFilter = {
  /** Search the record with the specified status */
  eq?: InputMaybe<ItemStatus>;
  /** Search records with the specified statuses */
  in?: InputMaybe<Array<InputMaybe<ItemStatus>>>;
  /** Exclude the record with the specified status */
  neq?: InputMaybe<ItemStatus>;
  /** Search records without the specified statuses */
  notIn?: InputMaybe<Array<InputMaybe<ItemStatus>>>;
};

export type StatusTagModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<StatusTagModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<StatusTagModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
};

export enum StatusTagModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Record of type Status Tag (status_tag) */
export type StatusTagRecord = RecordInterface & {
  __typename?: 'StatusTagRecord';
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Record of type Status Tag (status_tag) */
export type StatusTagRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Status Tag (status_tag) */
export type StatusTagRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Status Tag (status_tag) */
export type StatusTagRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Single-line string fields */
export type StringFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records that equal one of the specified values */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Filter records that do not equal one of the specified values */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export type StringMatchesFilter = {
  caseSensitive?: InputMaybe<Scalars['BooleanType']['input']>;
  pattern: Scalars['String']['input'];
  regexp?: InputMaybe<Scalars['BooleanType']['input']>;
};

export type StringMultiLocaleField = {
  __typename?: 'StringMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<Scalars['String']['output']>;
};

/** Specifies how to filter Structured Text fields values */
export type StructuredTextFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with the specified field set as blank (null or single empty paragraph) */
  isBlank?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export type Tag = {
  __typename?: 'Tag';
  attributes?: Maybe<Scalars['MetaTagAttributes']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  tag: Scalars['String']['output'];
};

export type TeamTagModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<TeamTagModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TeamTagModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  description?: InputMaybe<TextFilter>;
  id?: InputMaybe<ItemIdFilter>;
  position?: InputMaybe<PositionFilter>;
  team?: InputMaybe<StringFilter>;
  unit?: InputMaybe<LinkFilter>;
};

export enum TeamTagModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  TeamAsc = 'team_ASC',
  TeamDesc = 'team_DESC'
}

/** Record of type Team Tag (team_tag) */
export type TeamTagRecord = RecordInterface & {
  __typename?: 'TeamTagRecord';
  _allDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTeamLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  position?: Maybe<Scalars['IntType']['output']>;
  team?: Maybe<Scalars['String']['output']>;
  unit?: Maybe<UnitTagRecord>;
};


/** Record of type Team Tag (team_tag) */
export type TeamTagRecord_AllDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Team Tag (team_tag) */
export type TeamTagRecord_AllTeamLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Team Tag (team_tag) */
export type TeamTagRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Team Tag (team_tag) */
export type TeamTagRecordDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Team Tag (team_tag) */
export type TeamTagRecordTeamArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type TeaserContentModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<TeaserContentModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TeaserContentModelFilter>>>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  readMoreLink?: InputMaybe<LinkFilter>;
  sectionTitle?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type TeaserContentModelReadMoreLinkField = AboutItemRecord | AboutPageRecord | AnnualreportItemRecord | AnnualreportPageRecord | EmployeeItemRecord | EventItemRecord | HomePageRecord | MetaItemRecord | NewsItemRecord | ProjectItemRecord | ProjectUpdateItemRecord | PublicationItemRecord | RegionItemRecord | RegionsPageRecord | TopicItemRecord | TopicsPageRecord;

export type TeaserContentModelTextField = {
  __typename?: 'TeaserContentModelTextField';
  blocks: Array<Scalars['String']['output']>;
  links: Array<TeaserContentModelTextLinksField>;
  value: Scalars['JsonField']['output'];
};

export type TeaserContentModelTextLinksField = AboutItemRecord | AboutPageRecord | AnnualreportItemRecord | AnnualreportPageRecord | EmployeeItemRecord | EventItemRecord | HomePageRecord | MetaItemRecord | NewsItemRecord | ProjectItemRecord | ProjectUpdateItemRecord | PublicationItemRecord | RegionItemRecord | RegionsPageRecord | TopicItemRecord | TopicsPageRecord;

/** Block of type 6.2 Teaser Content (teaser_content) */
export type TeaserContentRecord = RecordInterface & {
  __typename?: 'TeaserContentRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  readMoreLink?: Maybe<TeaserContentModelReadMoreLinkField>;
  sectionTitle?: Maybe<Scalars['String']['output']>;
  text?: Maybe<TeaserContentModelTextField>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Block of type 6.2 Teaser Content (teaser_content) */
export type TeaserContentRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type TeaserExplorerlandModelTextField = {
  __typename?: 'TeaserExplorerlandModelTextField';
  blocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Block of type 6.5 Teaser explorer.land (teaser_explorerland) */
export type TeaserExplorerlandRecord = RecordInterface & {
  __typename?: 'TeaserExplorerlandRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  linkExplorerland?: Maybe<Scalars['String']['output']>;
  text?: Maybe<TeaserExplorerlandModelTextField>;
};


/** Block of type 6.5 Teaser explorer.land (teaser_explorerland) */
export type TeaserExplorerlandRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type TeaserGetInvolvedModelTextField = {
  __typename?: 'TeaserGetInvolvedModelTextField';
  blocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Block of type 6.6 Teaser Get Involved (teaser_get_involved) */
export type TeaserGetInvolvedRecord = RecordInterface & {
  __typename?: 'TeaserGetInvolvedRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  text?: Maybe<TeaserGetInvolvedModelTextField>;
};


/** Block of type 6.6 Teaser Get Involved (teaser_get_involved) */
export type TeaserGetInvolvedRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type 6.3 Teaser List (teaser_list) */
export type TeaserListRecord = RecordInterface & {
  __typename?: 'TeaserListRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
};


/** Block of type 6.3 Teaser List (teaser_list) */
export type TeaserListRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type 6.4 Teaser Team (teaser_team) */
export type TeaserTeamRecord = RecordInterface & {
  __typename?: 'TeaserTeamRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  teamLead?: Maybe<EmployeeItemRecord>;
  teamMembers: Array<EmployeeItemRecord>;
};


/** Block of type 6.4 Teaser Team (teaser_team) */
export type TeaserTeamRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type TeaserTextModelReadMoreLinkField = AboutItemRecord | AboutPageRecord | AnnualreportItemRecord | AnnualreportPageRecord | EmployeeItemRecord | EventItemRecord | HomePageRecord | NewsItemRecord | ProjectItemRecord | ProjectUpdateItemRecord | PublicationItemRecord | RegionItemRecord | TopicItemRecord | TopicsPageRecord;

export type TeaserTextModelTextField = {
  __typename?: 'TeaserTextModelTextField';
  blocks: Array<Scalars['String']['output']>;
  links: Array<TeaserTextModelTextLinksField>;
  value: Scalars['JsonField']['output'];
};

export type TeaserTextModelTextLinksField = AboutItemRecord | AboutPageRecord | AnnualreportItemRecord | AnnualreportPageRecord | EmployeeItemRecord | EventItemRecord | HomePageRecord | MetaItemRecord | NewsItemRecord | ProjectItemRecord | ProjectUpdateItemRecord | PublicationItemRecord | RegionItemRecord | RegionsPageRecord | TopicItemRecord | TopicsPageRecord;

/** Block of type 6.1 Teaser Text (teaser_text) */
export type TeaserTextRecord = RecordInterface & {
  __typename?: 'TeaserTextRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  readMoreLink?: Maybe<TeaserTextModelReadMoreLinkField>;
  sectionTitle?: Maybe<Scalars['String']['output']>;
  text?: Maybe<TeaserTextModelTextField>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Block of type 6.1 Teaser Text (teaser_text) */
export type TeaserTextRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type TextAsideModelReadMoreLinkField = AboutItemRecord | AboutPageRecord | AnnualreportItemRecord | AnnualreportPageRecord | EmployeeItemRecord | EventItemRecord | HomePageRecord | MetaItemRecord | NewsItemRecord | ProjectItemRecord | ProjectUpdateItemRecord | PublicationItemRecord | RegionItemRecord | RegionsPageRecord | TopicItemRecord | TopicsPageRecord;

export type TextAsideModelTextField = {
  __typename?: 'TextAsideModelTextField';
  blocks: Array<Scalars['String']['output']>;
  links: Array<TextAsideModelTextLinksField>;
  value: Scalars['JsonField']['output'];
};

export type TextAsideModelTextLinksField = AboutItemRecord | AboutPageRecord | AnnualreportItemRecord | AnnualreportPageRecord | EmployeeItemRecord | EventItemRecord | HomePageRecord | MetaItemRecord | NewsItemRecord | ProjectItemRecord | ProjectUpdateItemRecord | PublicationItemRecord | RegionItemRecord | RegionsPageRecord | TopicItemRecord | TopicsPageRecord;

/** Block of type 1.4 Text Aside (text_aside) */
export type TextAsideRecord = RecordInterface & {
  __typename?: 'TextAsideRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  readMoreLink?: Maybe<TextAsideModelReadMoreLinkField>;
  text?: Maybe<TextAsideModelTextField>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Block of type 1.4 Text Aside (text_aside) */
export type TextAsideRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type TextCenterModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<TextCenterModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TextCenterModelFilter>>>;
  id?: InputMaybe<ItemIdFilter>;
  readMoreLink?: InputMaybe<LinkFilter>;
  title?: InputMaybe<StringFilter>;
};

export type TextCenterModelReadMoreLinkField = AboutItemRecord | AboutPageRecord | AnnualreportItemRecord | AnnualreportPageRecord | EmployeeItemRecord | EventItemRecord | HomePageRecord | NewsItemRecord | ProjectItemRecord | ProjectUpdateItemRecord | PublicationItemRecord | RegionItemRecord | RegionsPageRecord | TopicItemRecord | TopicsPageRecord;

export type TextCenterModelTextField = {
  __typename?: 'TextCenterModelTextField';
  blocks: Array<Scalars['String']['output']>;
  links: Array<TextCenterModelTextLinksField>;
  value: Scalars['JsonField']['output'];
};

export type TextCenterModelTextLinksField = AboutItemRecord | AboutPageRecord | AnnualreportItemRecord | AnnualreportPageRecord | EmployeeItemRecord | EventItemRecord | HomePageRecord | MetaItemRecord | NewsItemRecord | ProjectItemRecord | ProjectUpdateItemRecord | PublicationItemRecord | RegionItemRecord | RegionsPageRecord | TopicItemRecord | TopicsPageRecord;

/** Block of type 1.3 Text Center (text_center) */
export type TextCenterRecord = RecordInterface & {
  __typename?: 'TextCenterRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  readMoreLink?: Maybe<TextCenterModelReadMoreLinkField>;
  text?: Maybe<TextCenterModelTextField>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Block of type 1.3 Text Center (text_center) */
export type TextCenterRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter text fields */
export type TextFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export type TextLeadAsideModelTextField = {
  __typename?: 'TextLeadAsideModelTextField';
  blocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Block of type 1.2 Text Lead Aside (text_lead_aside) */
export type TextLeadAsideRecord = RecordInterface & {
  __typename?: 'TextLeadAsideRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  text?: Maybe<TextLeadAsideModelTextField>;
};


/** Block of type 1.2 Text Lead Aside (text_lead_aside) */
export type TextLeadAsideRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type TextLeadCenterModelTextField = {
  __typename?: 'TextLeadCenterModelTextField';
  blocks: Array<Scalars['String']['output']>;
  links: Array<TextLeadCenterModelTextLinksField>;
  value: Scalars['JsonField']['output'];
};

export type TextLeadCenterModelTextLinksField = AboutItemRecord | AboutPageRecord | AnnualreportItemRecord | AnnualreportPageRecord | EmployeeItemRecord | EventItemRecord | HomePageRecord | MetaItemRecord | NewsItemRecord | ProjectItemRecord | ProjectUpdateItemRecord | PublicationItemRecord | RegionItemRecord | RegionsPageRecord | TopicItemRecord | TopicsPageRecord;

/** Block of type 1.1 Text Lead Center (text_lead_center) */
export type TextLeadCenterRecord = RecordInterface & {
  __typename?: 'TextLeadCenterRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  text?: Maybe<TextLeadCenterModelTextField>;
};


/** Block of type 1.1 Text Lead Center (text_lead_center) */
export type TextLeadCenterRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type TooltipModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<TooltipModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TooltipModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  slug?: InputMaybe<SlugFilter>;
  text?: InputMaybe<TextFilter>;
  word?: InputMaybe<StringFilter>;
};

export enum TooltipModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  WordAsc = 'word_ASC',
  WordDesc = 'word_DESC'
}

/** Record of type Tooltip (tooltip) */
export type TooltipRecord = RecordInterface & {
  __typename?: 'TooltipRecord';
  _allTextLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allWordLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  word?: Maybe<Scalars['String']['output']>;
};


/** Record of type Tooltip (tooltip) */
export type TooltipRecord_AllTextLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Tooltip (tooltip) */
export type TooltipRecord_AllWordLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Tooltip (tooltip) */
export type TooltipRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Tooltip (tooltip) */
export type TooltipRecordTextArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Tooltip (tooltip) */
export type TooltipRecordWordArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type TopicItemModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<TopicItemModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TopicItemModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  icon?: InputMaybe<FileFilter>;
  id?: InputMaybe<ItemIdFilter>;
  navigationTitle?: InputMaybe<StringFilter>;
  parentPid?: InputMaybe<StringFilter>;
  position?: InputMaybe<PositionFilter>;
  seoSocial?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  text?: InputMaybe<StructuredTextFilter>;
  title?: InputMaybe<StringFilter>;
};

export enum TopicItemModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NavigationTitleAsc = 'navigationTitle_ASC',
  NavigationTitleDesc = 'navigationTitle_DESC',
  ParentPidAsc = 'parentPid_ASC',
  ParentPidDesc = 'parentPid_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type TopicItemModelTextField = {
  __typename?: 'TopicItemModelTextField';
  blocks: Array<Scalars['String']['output']>;
  links: Array<TopicItemModelTextLinksField>;
  value: Scalars['JsonField']['output'];
};

export type TopicItemModelTextFieldMultiLocaleField = {
  __typename?: 'TopicItemModelTextFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<TopicItemModelTextField>;
};

export type TopicItemModelTextLinksField = AboutItemRecord | AboutPageRecord | AnnualreportItemRecord | AnnualreportPageRecord | EmployeeItemRecord | EventItemRecord | HomePageRecord | MetaItemRecord | NewsItemRecord | ProjectItemRecord | ProjectUpdateItemRecord | PublicationItemRecord | PublicationTagRecord | RegionItemRecord | RegionsPageRecord | TopicItemRecord | TopicsPageRecord;

/** Record of type 2 Topic Item (topic_item) */
export type TopicItemRecord = RecordInterface & {
  __typename?: 'TopicItemRecord';
  _allNavigationTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSeoSocialLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allSlugLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTextLocales?: Maybe<Array<TopicItemModelTextFieldMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  icon?: Maybe<FileField>;
  id: Scalars['ItemId']['output'];
  navigationTitle?: Maybe<Scalars['String']['output']>;
  parentPid?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['IntType']['output']>;
  seoSocial?: Maybe<SeoField>;
  slug?: Maybe<Scalars['String']['output']>;
  text?: Maybe<TopicItemModelTextField>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Record of type 2 Topic Item (topic_item) */
export type TopicItemRecord_AllNavigationTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 2 Topic Item (topic_item) */
export type TopicItemRecord_AllSeoSocialLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 2 Topic Item (topic_item) */
export type TopicItemRecord_AllSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 2 Topic Item (topic_item) */
export type TopicItemRecord_AllTextLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 2 Topic Item (topic_item) */
export type TopicItemRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 2 Topic Item (topic_item) */
export type TopicItemRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 2 Topic Item (topic_item) */
export type TopicItemRecordNavigationTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 2 Topic Item (topic_item) */
export type TopicItemRecordSeoSocialArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 2 Topic Item (topic_item) */
export type TopicItemRecordSlugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 2 Topic Item (topic_item) */
export type TopicItemRecordTextArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 2 Topic Item (topic_item) */
export type TopicItemRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type TopicsPageModelIntroductionField = {
  __typename?: 'TopicsPageModelIntroductionField';
  blocks: Array<Scalars['String']['output']>;
  links: Array<TopicsPageModelIntroductionLinksField>;
  value: Scalars['JsonField']['output'];
};

export type TopicsPageModelIntroductionFieldMultiLocaleField = {
  __typename?: 'TopicsPageModelIntroductionFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<TopicsPageModelIntroductionField>;
};

export type TopicsPageModelIntroductionLinksField = AboutItemRecord | AboutPageRecord | AnnualreportItemRecord | AnnualreportPageRecord | EmployeeItemRecord | EventItemRecord | HomePageRecord | MetaItemRecord | NewsItemRecord | ProjectItemRecord | ProjectUpdateItemRecord | PublicationItemRecord | RegionItemRecord | RegionsPageRecord | TopicItemRecord | TopicsPageRecord;

/** Record of type 2 Topic Page (topics_page) */
export type TopicsPageRecord = RecordInterface & {
  __typename?: 'TopicsPageRecord';
  _allIntroductionLocales?: Maybe<Array<TopicsPageModelIntroductionFieldMultiLocaleField>>;
  _allNavigationTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSeoSocialLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allSlugLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  introduction?: Maybe<TopicsPageModelIntroductionField>;
  navigationTitle?: Maybe<Scalars['String']['output']>;
  seoSocial?: Maybe<SeoField>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Record of type 2 Topic Page (topics_page) */
export type TopicsPageRecord_AllIntroductionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 2 Topic Page (topics_page) */
export type TopicsPageRecord_AllNavigationTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 2 Topic Page (topics_page) */
export type TopicsPageRecord_AllSeoSocialLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 2 Topic Page (topics_page) */
export type TopicsPageRecord_AllSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 2 Topic Page (topics_page) */
export type TopicsPageRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type 2 Topic Page (topics_page) */
export type TopicsPageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 2 Topic Page (topics_page) */
export type TopicsPageRecordIntroductionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 2 Topic Page (topics_page) */
export type TopicsPageRecordNavigationTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 2 Topic Page (topics_page) */
export type TopicsPageRecordSeoSocialArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 2 Topic Page (topics_page) */
export type TopicsPageRecordSlugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 2 Topic Page (topics_page) */
export type TopicsPageRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by upload type */
export type TypeFilter = {
  /** Search uploads with the specified type */
  eq?: InputMaybe<UploadType>;
  /** Search uploads with the specified types */
  in?: InputMaybe<Array<InputMaybe<UploadType>>>;
  /** Exclude uploads with the specified type */
  neq?: InputMaybe<UploadType>;
  /** Search uploads without the specified types */
  notIn?: InputMaybe<Array<InputMaybe<UploadType>>>;
};

export type UiTextModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<UiTextModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<UiTextModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  slug?: InputMaybe<SlugFilter>;
  text?: InputMaybe<StringFilter>;
};

export enum UiTextModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC'
}

/** Record of type UI Text (ui_text) */
export type UiTextRecord = RecordInterface & {
  __typename?: 'UiTextRecord';
  _allTextLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};


/** Record of type UI Text (ui_text) */
export type UiTextRecord_AllTextLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type UI Text (ui_text) */
export type UiTextRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type UI Text (ui_text) */
export type UiTextRecordTextArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type UnitTagModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<UnitTagModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<UnitTagModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  position?: InputMaybe<PositionFilter>;
  text?: InputMaybe<TextFilter>;
  title?: InputMaybe<StringFilter>;
};

export enum UnitTagModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Record of type Unit Tag (unit_tag) */
export type UnitTagRecord = RecordInterface & {
  __typename?: 'UnitTagRecord';
  _allTextLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  position?: Maybe<Scalars['IntType']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Record of type Unit Tag (unit_tag) */
export type UnitTagRecord_AllTextLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Unit Tag (unit_tag) */
export type UnitTagRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Unit Tag (unit_tag) */
export type UnitTagRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Unit Tag (unit_tag) */
export type UnitTagRecordTextArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Unit Tag (unit_tag) */
export type UnitTagRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by update datetime */
export type UpdatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Specifies how to filter by default alt */
export type UploadAltFilter = {
  /** Search the uploads with the specified alt */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Search uploads with the specified values as default alt */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the uploads with the specified alt */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search uploads that do not have the specified values as default alt */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by auhtor */
export type UploadAuthorFilter = {
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by basename */
export type UploadBasenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by colors */
export type UploadColorsFilter = {
  /** Filter uploads that have all of the specified colors */
  allIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that have at least one of the specified colors */
  anyIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that have the specified colors */
  contains?: InputMaybe<ColorBucketType>;
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that do not have any of the specified colors */
  notIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
};

/** Specifies how to filter by copyright */
export type UploadCopyrightFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by creation datetime */
export type UploadCreatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Specifies how to filter by filename */
export type UploadFilenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export type UploadFilter = {
  AND?: InputMaybe<Array<InputMaybe<UploadFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<UploadFilter>>>;
  _createdAt?: InputMaybe<UploadCreatedAtFilter>;
  _updatedAt?: InputMaybe<UploadUpdatedAtFilter>;
  alt?: InputMaybe<UploadAltFilter>;
  author?: InputMaybe<UploadAuthorFilter>;
  basename?: InputMaybe<UploadBasenameFilter>;
  colors?: InputMaybe<UploadColorsFilter>;
  copyright?: InputMaybe<UploadCopyrightFilter>;
  filename?: InputMaybe<UploadFilenameFilter>;
  format?: InputMaybe<UploadFormatFilter>;
  height?: InputMaybe<UploadHeightFilter>;
  id?: InputMaybe<UploadIdFilter>;
  inUse?: InputMaybe<InUseFilter>;
  md5?: InputMaybe<UploadMd5Filter>;
  mimeType?: InputMaybe<UploadMimeTypeFilter>;
  notes?: InputMaybe<UploadNotesFilter>;
  orientation?: InputMaybe<OrientationFilter>;
  resolution?: InputMaybe<ResolutionFilter>;
  size?: InputMaybe<UploadSizeFilter>;
  smartTags?: InputMaybe<UploadTagsFilter>;
  tags?: InputMaybe<UploadTagsFilter>;
  title?: InputMaybe<UploadTitleFilter>;
  type?: InputMaybe<TypeFilter>;
  width?: InputMaybe<UploadWidthFilter>;
};

/** Specifies how to filter by format */
export type UploadFormatFilter = {
  /** Search the asset with the specified format */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets with the specified formats */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude the asset with the specified format */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified formats */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Specifies how to filter by height */
export type UploadHeightFilter = {
  /** Search assets with the specified height */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger than the specified height */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified height */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets smaller than the specified height */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified height */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search assets that do not have the specified height */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

/** Specifies how to filter by ID */
export type UploadIdFilter = {
  /** Search the asset with the specified ID */
  eq?: InputMaybe<Scalars['UploadId']['input']>;
  /** Search assets with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
  /** Exclude the asset with the specified ID */
  neq?: InputMaybe<Scalars['UploadId']['input']>;
  /** Search assets that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
};

/** Specifies how to filter by MD5 */
export type UploadMd5Filter = {
  /** Search the asset with the specified MD5 */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets with the specified MD5s */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude the asset with the specified MD5 */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified MD5s */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Specifies how to filter by mime type */
export type UploadMimeTypeFilter = {
  /** Search the asset with the specified mime type */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets with the specified mime types */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the asset with the specified mime type */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified mime types */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by notes */
export type UploadNotesFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export enum UploadOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  BasenameAsc = 'basename_ASC',
  BasenameDesc = 'basename_DESC',
  FilenameAsc = 'filename_ASC',
  FilenameDesc = 'filename_DESC',
  FormatAsc = 'format_ASC',
  FormatDesc = 'format_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  ResolutionAsc = 'resolution_ASC',
  ResolutionDesc = 'resolution_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC'
}

export enum UploadOrientation {
  Landscape = 'landscape',
  Portrait = 'portrait',
  Square = 'square'
}

/** Specifies how to filter by size */
export type UploadSizeFilter = {
  /** Search assets with the specified size (in bytes) */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger than the specified size (in bytes) */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets smaller than the specified size (in bytes) */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search assets that do not have the specified size (in bytes) */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

/** Specifies how to filter by tags */
export type UploadTagsFilter = {
  /** Filter uploads linked to all of the specified tags */
  allIn?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter uploads linked to at least one of the specified tags */
  anyIn?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter uploads linked to the specified tag */
  contains?: InputMaybe<Scalars['String']['input']>;
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter uploads not linked to any of the specified tags */
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Specifies how to filter by default title */
export type UploadTitleFilter = {
  /** Search the asset with the specified title */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filter assets with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Search assets with the specified as default title */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the asset with the specified title */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified as default title */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export enum UploadType {
  Archive = 'archive',
  Audio = 'audio',
  Image = 'image',
  Pdfdocument = 'pdfdocument',
  Presentation = 'presentation',
  Richtext = 'richtext',
  Spreadsheet = 'spreadsheet',
  Video = 'video'
}

/** Specifies how to filter by update datetime */
export type UploadUpdatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UploadVideoField = {
  __typename?: 'UploadVideoField';
  alt?: Maybe<Scalars['String']['output']>;
  blurUpThumb?: Maybe<Scalars['String']['output']>;
  blurhash?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  framerate?: Maybe<Scalars['Int']['output']>;
  height: Scalars['IntType']['output'];
  mp4Url?: Maybe<Scalars['String']['output']>;
  muxAssetId: Scalars['String']['output'];
  muxPlaybackId: Scalars['String']['output'];
  streamingUrl: Scalars['String']['output'];
  thumbhash?: Maybe<Scalars['String']['output']>;
  thumbnailUrl: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  width: Scalars['IntType']['output'];
};


export type UploadVideoFieldAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type UploadVideoFieldBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float']['input'];
  quality?: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
};


export type UploadVideoFieldMp4UrlArgs = {
  exactRes?: InputMaybe<VideoMp4Res>;
  res?: InputMaybe<VideoMp4Res>;
};


export type UploadVideoFieldThumbnailUrlArgs = {
  format?: InputMaybe<MuxThumbnailFormatType>;
};


export type UploadVideoFieldTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by width */
export type UploadWidthFilter = {
  /** Search assets with the specified width */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger than the specified width */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified width */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets smaller than the specified width */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified width */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search assets that do not have the specified width */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

/** Block of type 4.2 Video Aside (video_aside) */
export type VideoAsideRecord = RecordInterface & {
  __typename?: 'VideoAsideRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  video?: Maybe<FileField>;
};


/** Block of type 4.2 Video Aside (video_aside) */
export type VideoAsideRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type VideoFullModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<VideoFullModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<VideoFullModelFilter>>>;
  id?: InputMaybe<ItemIdFilter>;
  video?: InputMaybe<FileFilter>;
};

/** Block of type 4.1 Video Full (video_full) */
export type VideoFullRecord = RecordInterface & {
  __typename?: 'VideoFullRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  video?: Maybe<FileField>;
};


/** Block of type 4.1 Video Full (video_full) */
export type VideoFullRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export enum VideoMp4Res {
  High = 'high',
  Low = 'low',
  Medium = 'medium'
}

export type FocalPoint = {
  __typename?: 'focalPoint';
  x: Scalars['FloatType']['output'];
  y: Scalars['FloatType']['output'];
};

export type AboutQueryQueryVariables = Exact<{
  lang?: InputMaybe<SiteLocale>;
}>;


export type AboutQueryQuery = { __typename?: 'Query', aboutPage?: { __typename: 'AboutPageRecord', id: string, navigationTitle?: string | null, title?: string | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string }> } | null };

export type AboutItemQueryQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  lang?: InputMaybe<SiteLocale>;
}>;


export type AboutItemQueryQuery = { __typename?: 'Query', aboutItem?: { __typename: 'AboutItemRecord', id: string, navigationTitle?: string | null, title?: string | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string }> } | null };

export type AnnualreportItemQueryQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  lang?: InputMaybe<SiteLocale>;
}>;


export type AnnualreportItemQueryQuery = { __typename?: 'Query', annualreportItem?: { __typename: 'AnnualreportItemRecord', id: string, navigationTitle?: string | null, title?: string | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string }> } | null };

export type BuildQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type BuildQueryQuery = { __typename?: 'Query', homePage?: { __typename?: 'HomePageRecord', id: string, _allSlugLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, slug?: string | null }> | null } | null, topicsPage?: { __typename?: 'TopicsPageRecord', id: string, _allSlugLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, slug?: string | null }> | null } | null, allTopicItems: Array<{ __typename?: 'TopicItemRecord', id: string, parentPid?: string | null, _allSlugLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, slug?: string | null }> | null }>, regionsPage?: { __typename?: 'RegionsPageRecord', id: string, _allSlugLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, slug?: string | null }> | null } | null, allRegionItems: Array<{ __typename?: 'RegionItemRecord', id: string, parentPid?: string | null, _allSlugLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, slug?: string | null }> | null }>, allProjectItems: Array<{ __typename?: 'ProjectItemRecord', id: string, _allSlugLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, slug?: string | null }> | null }>, allProjectUpdateItems: Array<{ __typename?: 'ProjectUpdateItemRecord', id: string, _allSlugLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, slug?: string | null }> | null }>, aboutPage?: { __typename?: 'AboutPageRecord', id: string, _allSlugLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, slug?: string | null }> | null } | null, allAboutItems: Array<{ __typename?: 'AboutItemRecord', id: string, parentPid?: string | null, _allSlugLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, slug?: string | null }> | null }>, allAnnualreportItems: Array<{ __typename?: 'AnnualreportItemRecord', id: string, parentPid?: string | null, _allSlugLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, slug?: string | null }> | null }>, allEmployeeItems: Array<{ __typename?: 'EmployeeItemRecord', id: string, parentPid?: string | null, _allSlugLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, slug?: string | null }> | null }>, newsPage?: { __typename?: 'NewsPageRecord', id: string, _allSlugLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, slug?: string | null }> | null } | null, allNewsItems: Array<{ __typename?: 'NewsItemRecord', id: string, parentPid?: string | null, _allSlugLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, slug?: string | null }> | null }>, eventsPage?: { __typename?: 'EventsPageRecord', id: string, _allSlugLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, slug?: string | null }> | null } | null, allEventItems: Array<{ __typename?: 'EventItemRecord', id: string, parentPid?: string | null, _allSlugLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, slug?: string | null }> | null }>, publicationsPage?: { __typename?: 'PublicationsPageRecord', id: string, _allSlugLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, slug?: string | null }> | null } | null, allPublicationItems: Array<{ __typename?: 'PublicationItemRecord', id: string, parentPid?: string | null, _allSlugLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, slug?: string | null }> | null }>, allMetaItems: Array<{ __typename?: 'MetaItemRecord', id: string, _allSlugLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, slug?: string | null }> | null }> };

export type EmployeeItemQueryQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  lang?: InputMaybe<SiteLocale>;
}>;


export type EmployeeItemQueryQuery = { __typename?: 'Query', employeeItem?: { __typename: 'EmployeeItemRecord', id: string, name?: string | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string }> } | null };

export type EventItemQueryQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  lang?: InputMaybe<SiteLocale>;
}>;


export type EventItemQueryQuery = { __typename?: 'Query', eventItem?: { __typename: 'EventItemRecord', id: string, navigationTitle?: string | null, title?: string | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string }> } | null };

export type EventsQueryQueryVariables = Exact<{
  lang?: InputMaybe<SiteLocale>;
}>;


export type EventsQueryQuery = { __typename?: 'Query', eventsPage?: { __typename: 'EventsPageRecord', id: string, navigationTitle?: string | null, title?: string | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string }> } | null };

export type HomeQueryQueryVariables = Exact<{
  lang?: InputMaybe<SiteLocale>;
}>;


export type HomeQueryQuery = { __typename?: 'Query', homePage?: { __typename: 'HomePageRecord', id: string, navigationTitle?: string | null, title?: string | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string }> } | null };

export type InitialQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type InitialQueryQuery = { __typename?: 'Query', pageHome?: { __typename: 'HomePageRecord', id: string, _allSlugLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, slug?: string | null }> | null, _allNavigationTitleLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, title?: string | null }> | null } | null, pageTopics?: { __typename: 'TopicsPageRecord', id: string, _allSlugLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, slug?: string | null }> | null, _allNavigationTitleLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, title?: string | null }> | null } | null, pageTopicItems: Array<{ __typename: 'TopicItemRecord', id: string, parentPid?: string | null, _allSlugLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, slug?: string | null }> | null, _allNavigationTitleLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, title?: string | null }> | null }>, pageRegions?: { __typename: 'RegionsPageRecord', id: string, _allSlugLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, slug?: string | null }> | null, _allNavigationTitleLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, title?: string | null }> | null } | null, pageRegionItems: Array<{ __typename: 'RegionItemRecord', id: string, parentPid?: string | null, _allSlugLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, slug?: string | null }> | null, _allNavigationTitleLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, title?: string | null }> | null }>, pageProjectItems: Array<{ __typename: 'ProjectItemRecord', id: string, _allSlugLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, slug?: string | null }> | null, _allNavigationTitleLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, title?: string | null }> | null }>, pageProjectUpdateItems: Array<{ __typename: 'ProjectUpdateItemRecord', id: string, _allSlugLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, slug?: string | null }> | null, _allNavigationTitleLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, title?: string | null }> | null }>, pageAbout?: { __typename: 'AboutPageRecord', id: string, _allSlugLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, slug?: string | null }> | null, _allNavigationTitleLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, title?: string | null }> | null } | null, pageAboutItems: Array<{ __typename: 'AboutItemRecord', id: string, parentPid?: string | null, _allSlugLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, slug?: string | null }> | null, _allNavigationTitleLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, title?: string | null }> | null }>, pageAnnualreportItems: Array<{ __typename: 'AnnualreportItemRecord', id: string, parentPid?: string | null, _allSlugLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, slug?: string | null }> | null, _allNavigationTitleLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, title?: string | null }> | null }>, pageEmployeeItems: Array<{ __typename: 'EmployeeItemRecord', id: string, parentPid?: string | null, title?: string | null, _allSlugLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, slug?: string | null }> | null }>, pageNews?: { __typename: 'NewsPageRecord', id: string, _allSlugLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, slug?: string | null }> | null, _allNavigationTitleLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, title?: string | null }> | null } | null, pageNewsItems: Array<{ __typename: 'NewsItemRecord', id: string, parentPid?: string | null, _allSlugLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, slug?: string | null }> | null, _allNavigationTitleLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, title?: string | null }> | null }>, pageEvents?: { __typename: 'EventsPageRecord', id: string, _allSlugLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, slug?: string | null }> | null, _allNavigationTitleLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, title?: string | null }> | null } | null, pageEventItems: Array<{ __typename: 'EventItemRecord', id: string, parentPid?: string | null, _allSlugLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, slug?: string | null }> | null, _allNavigationTitleLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, title?: string | null }> | null }>, pagePublications?: { __typename: 'PublicationsPageRecord', id: string, _allSlugLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, slug?: string | null }> | null, _allNavigationTitleLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, title?: string | null }> | null } | null, pagePublicationItems: Array<{ __typename: 'PublicationItemRecord', id: string, parentPid?: string | null, _allSlugLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, slug?: string | null }> | null, _allNavigationTitleLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, title?: string | null }> | null }>, pageMetaItems: Array<{ __typename: 'MetaItemRecord', id: string, _allSlugLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, slug?: string | null }> | null, _allNavigationTitleLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, title?: string | null }> | null }>, tagsUnit: Array<{ __typename?: 'UnitTagRecord', id: string, _allTitleLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, value?: string | null }> | null, _allTextLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, value?: string | null }> | null }>, tagsTeam: Array<{ __typename?: 'TeamTagRecord', id: string, _allTeamLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, value?: string | null }> | null, _allDescriptionLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, value?: string | null }> | null, unit?: { __typename?: 'UnitTagRecord', id: string, _allTitleLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, value?: string | null }> | null, _allTextLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, value?: string | null }> | null } | null }>, tagsPublication: Array<{ __typename?: 'PublicationTagRecord', id: string, slug?: string | null, _allTitleLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, value?: string | null }> | null }>, tagsSolutionscape: Array<{ __typename?: 'SolutionscapeTagRecord', id: string, slug?: string | null, linkUrl?: string | null, _allTitleLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, value?: string | null }> | null }>, tagsStatus: Array<{ __typename?: 'StatusTagRecord', id: string, slug?: string | null, _allTitleLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, value?: string | null }> | null }>, featTooltips: Array<{ __typename?: 'TooltipRecord', id: string, slug?: string | null, _allWordLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, value?: string | null }> | null, _allTextLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, value?: string | null }> | null }>, featUiTexts: Array<{ __typename?: 'UiTextRecord', id: string, slug?: string | null, _allTextLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, value?: string | null }> | null }>, featFooter?: { __typename?: 'FooterRecord', _allTitleLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, value?: string | null }> | null, featuredLinks: Array<{ __typename?: 'MetaItemRecord', id: string }>, _allSubscriptionTextLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, value?: string | null }> | null, metaLinks: Array<{ __typename?: 'AboutItemRecord', id: string } | { __typename?: 'MetaItemRecord', id: string }>, socialLinks: Array<{ __typename?: 'LinkExternalRecord', id: string, label?: string | null, url?: string | null }> } | null, featCookie?: { __typename?: 'CookieRecord', id: string, _allTitleLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, value?: string | null }> | null, _allTextLocales?: Array<{ __typename?: 'StringMultiLocaleField', locale?: SiteLocale | null, value?: string | null }> | null } | null };

export type MetaItemQueryQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  lang?: InputMaybe<SiteLocale>;
}>;


export type MetaItemQueryQuery = { __typename?: 'Query', metaItem?: { __typename: 'MetaItemRecord', id: string, navigationTitle?: string | null, title?: string | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string }> } | null };

export type NewsQueryQueryVariables = Exact<{
  lang?: InputMaybe<SiteLocale>;
}>;


export type NewsQueryQuery = { __typename?: 'Query', newsPage?: { __typename: 'NewsPageRecord', id: string, navigationTitle?: string | null, title?: string | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string }> } | null };

export type NewsItemQueryQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  lang?: InputMaybe<SiteLocale>;
}>;


export type NewsItemQueryQuery = { __typename?: 'Query', newsItem?: { __typename: 'NewsItemRecord', id: string, navigationTitle?: string | null, title?: string | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string }> } | null };

export type ProjectItemQueryQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  lang?: InputMaybe<SiteLocale>;
}>;


export type ProjectItemQueryQuery = { __typename?: 'Query', projectItem?: { __typename: 'ProjectItemRecord', id: string, navigationTitle?: string | null, title?: string | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string }> } | null };

export type ProjectUpdateItemQueryQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  lang?: InputMaybe<SiteLocale>;
}>;


export type ProjectUpdateItemQueryQuery = { __typename?: 'Query', projectUpdateItem?: { __typename: 'ProjectUpdateItemRecord', id: string, navigationTitle?: string | null, title?: string | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string }> } | null };

export type PublicationItemQueryQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  lang?: InputMaybe<SiteLocale>;
}>;


export type PublicationItemQueryQuery = { __typename?: 'Query', publicationItem?: { __typename: 'PublicationItemRecord', id: string, navigationTitle?: string | null, title?: string | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string }> } | null };

export type PublicationsQueryQueryVariables = Exact<{
  lang?: InputMaybe<SiteLocale>;
}>;


export type PublicationsQueryQuery = { __typename?: 'Query', publicationsPage?: { __typename: 'PublicationsPageRecord', id: string, navigationTitle?: string | null, title?: string | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string }> } | null };

export type RegionItemQueryQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  lang?: InputMaybe<SiteLocale>;
}>;


export type RegionItemQueryQuery = { __typename?: 'Query', regionItem?: { __typename: 'RegionItemRecord', id: string, navigationTitle?: string | null, title?: string | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string }> } | null };

export type RegionsQueryQueryVariables = Exact<{
  lang?: InputMaybe<SiteLocale>;
}>;


export type RegionsQueryQuery = { __typename?: 'Query', regionsPage?: { __typename: 'RegionsPageRecord', id: string, navigationTitle?: string | null, title?: string | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string }> } | null };

export type TopicItemQueryQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  lang?: InputMaybe<SiteLocale>;
}>;


export type TopicItemQueryQuery = { __typename?: 'Query', topicItem?: { __typename: 'TopicItemRecord', id: string, navigationTitle?: string | null, title?: string | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string }> } | null };

export type TopicsQueryQueryVariables = Exact<{
  lang?: InputMaybe<SiteLocale>;
}>;


export type TopicsQueryQuery = { __typename?: 'Query', topicsPage?: { __typename: 'TopicsPageRecord', id: string, navigationTitle?: string | null, title?: string | null, introduction?: { __typename?: 'TopicsPageModelIntroductionField', value: unkown } | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string }> } | null };


export const AboutQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AboutQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lang"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}},"defaultValue":{"kind":"EnumValue","value":"en"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aboutPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"navigationTitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"_seoMetaTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tag"}}]}}]}}]}}]} as unknown as DocumentNode<AboutQueryQuery, AboutQueryQueryVariables>;
export const AboutItemQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AboutItemQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lang"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}},"defaultValue":{"kind":"EnumValue","value":"en"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aboutItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"navigationTitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"_seoMetaTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tag"}}]}}]}}]}}]} as unknown as DocumentNode<AboutItemQueryQuery, AboutItemQueryQueryVariables>;
export const AnnualreportItemQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AnnualreportItemQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lang"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}},"defaultValue":{"kind":"EnumValue","value":"en"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"annualreportItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"navigationTitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"_seoMetaTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tag"}}]}}]}}]}}]} as unknown as DocumentNode<AnnualreportItemQueryQuery, AnnualreportItemQueryQueryVariables>;
export const BuildQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BuildQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"homePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"slug"},"name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"topicsPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"slug"},"name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"allTopicItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parentPid"}},{"kind":"Field","name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"slug"},"name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"regionsPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"slug"},"name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"allRegionItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parentPid"}},{"kind":"Field","name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"slug"},"name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"allProjectItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"slug"},"name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"allProjectUpdateItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"slug"},"name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"aboutPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"slug"},"name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"allAboutItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parentPid"}},{"kind":"Field","name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"slug"},"name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"allAnnualreportItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parentPid"}},{"kind":"Field","name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"slug"},"name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"allEmployeeItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"500"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parentPid"}},{"kind":"Field","name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"slug"},"name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"newsPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"slug"},"name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"allNewsItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parentPid"}},{"kind":"Field","name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"slug"},"name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"eventsPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"slug"},"name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"allEventItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parentPid"}},{"kind":"Field","name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"slug"},"name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"publicationsPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"slug"},"name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"allPublicationItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parentPid"}},{"kind":"Field","name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"slug"},"name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"allMetaItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"slug"},"name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<BuildQueryQuery, BuildQueryQueryVariables>;
export const EmployeeItemQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EmployeeItemQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lang"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}},"defaultValue":{"kind":"EnumValue","value":"en"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"employeeItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"_seoMetaTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tag"}}]}}]}}]}}]} as unknown as DocumentNode<EmployeeItemQueryQuery, EmployeeItemQueryQueryVariables>;
export const EventItemQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EventItemQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lang"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}},"defaultValue":{"kind":"EnumValue","value":"en"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eventItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"navigationTitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"_seoMetaTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tag"}}]}}]}}]}}]} as unknown as DocumentNode<EventItemQueryQuery, EventItemQueryQueryVariables>;
export const EventsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EventsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lang"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}},"defaultValue":{"kind":"EnumValue","value":"en"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eventsPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"navigationTitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"_seoMetaTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tag"}}]}}]}}]}}]} as unknown as DocumentNode<EventsQueryQuery, EventsQueryQueryVariables>;
export const HomeQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HomeQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lang"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}},"defaultValue":{"kind":"EnumValue","value":"en"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"homePage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"navigationTitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"_seoMetaTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tag"}}]}}]}}]}}]} as unknown as DocumentNode<HomeQueryQuery, HomeQueryQueryVariables>;
export const InitialQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"InitialQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"pageHome"},"name":{"kind":"Name","value":"homePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"slug"},"name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"_allNavigationTitleLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"pageTopics"},"name":{"kind":"Name","value":"topicsPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"slug"},"name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"_allNavigationTitleLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"pageTopicItems"},"name":{"kind":"Name","value":"allTopicItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parentPid"}},{"kind":"Field","name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"slug"},"name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"_allNavigationTitleLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"pageRegions"},"name":{"kind":"Name","value":"regionsPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"slug"},"name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"_allNavigationTitleLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"pageRegionItems"},"name":{"kind":"Name","value":"allRegionItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parentPid"}},{"kind":"Field","name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"slug"},"name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"_allNavigationTitleLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"pageProjectItems"},"name":{"kind":"Name","value":"allProjectItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"slug"},"name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"_allNavigationTitleLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"pageProjectUpdateItems"},"name":{"kind":"Name","value":"allProjectUpdateItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"slug"},"name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"_allNavigationTitleLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"pageAbout"},"name":{"kind":"Name","value":"aboutPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"slug"},"name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"_allNavigationTitleLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"pageAboutItems"},"name":{"kind":"Name","value":"allAboutItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parentPid"}},{"kind":"Field","name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"slug"},"name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"_allNavigationTitleLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"pageAnnualreportItems"},"name":{"kind":"Name","value":"allAnnualreportItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parentPid"}},{"kind":"Field","name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"slug"},"name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"_allNavigationTitleLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"pageEmployeeItems"},"name":{"kind":"Name","value":"allEmployeeItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"500"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parentPid"}},{"kind":"Field","name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"slug"},"name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"pageNews"},"name":{"kind":"Name","value":"newsPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"slug"},"name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"_allNavigationTitleLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"pageNewsItems"},"name":{"kind":"Name","value":"allNewsItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parentPid"}},{"kind":"Field","name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"slug"},"name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"_allNavigationTitleLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"pageEvents"},"name":{"kind":"Name","value":"eventsPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"slug"},"name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"_allNavigationTitleLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"pageEventItems"},"name":{"kind":"Name","value":"allEventItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parentPid"}},{"kind":"Field","name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"slug"},"name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"_allNavigationTitleLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"pagePublications"},"name":{"kind":"Name","value":"publicationsPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"slug"},"name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"_allNavigationTitleLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"pagePublicationItems"},"name":{"kind":"Name","value":"allPublicationItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parentPid"}},{"kind":"Field","name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"slug"},"name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"_allNavigationTitleLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"pageMetaItems"},"name":{"kind":"Name","value":"allMetaItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"slug"},"name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"_allNavigationTitleLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"tagsUnit"},"name":{"kind":"Name","value":"allUnitTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_allTitleLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"_allTextLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"tagsTeam"},"name":{"kind":"Name","value":"allTeamTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_allTeamLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"_allDescriptionLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_allTitleLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"_allTextLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"tagsPublication"},"name":{"kind":"Name","value":"allPublicationTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_allTitleLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"tagsSolutionscape"},"name":{"kind":"Name","value":"allSolutionscapeTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_allTitleLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"linkUrl"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"tagsStatus"},"name":{"kind":"Name","value":"allStatusTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_allTitleLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"featTooltips"},"name":{"kind":"Name","value":"allTooltips"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_allWordLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"_allTextLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"featUiTexts"},"name":{"kind":"Name","value":"allUiTexts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_allTextLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"featFooter"},"name":{"kind":"Name","value":"footer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_allTitleLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"featuredLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"_allSubscriptionTextLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metaLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AboutItemRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MetaItemRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"socialLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"featCookie"},"name":{"kind":"Name","value":"cookie"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_allTitleLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"_allTextLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<InitialQueryQuery, InitialQueryQueryVariables>;
export const MetaItemQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MetaItemQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lang"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}},"defaultValue":{"kind":"EnumValue","value":"en"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"metaItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"navigationTitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"_seoMetaTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tag"}}]}}]}}]}}]} as unknown as DocumentNode<MetaItemQueryQuery, MetaItemQueryQueryVariables>;
export const NewsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NewsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lang"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}},"defaultValue":{"kind":"EnumValue","value":"en"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newsPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"navigationTitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"_seoMetaTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tag"}}]}}]}}]}}]} as unknown as DocumentNode<NewsQueryQuery, NewsQueryQueryVariables>;
export const NewsItemQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NewsItemQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lang"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}},"defaultValue":{"kind":"EnumValue","value":"en"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newsItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"navigationTitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"_seoMetaTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tag"}}]}}]}}]}}]} as unknown as DocumentNode<NewsItemQueryQuery, NewsItemQueryQueryVariables>;
export const ProjectItemQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProjectItemQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lang"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}},"defaultValue":{"kind":"EnumValue","value":"en"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"navigationTitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"_seoMetaTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tag"}}]}}]}}]}}]} as unknown as DocumentNode<ProjectItemQueryQuery, ProjectItemQueryQueryVariables>;
export const ProjectUpdateItemQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProjectUpdateItemQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lang"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}},"defaultValue":{"kind":"EnumValue","value":"en"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectUpdateItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"navigationTitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"_seoMetaTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tag"}}]}}]}}]}}]} as unknown as DocumentNode<ProjectUpdateItemQueryQuery, ProjectUpdateItemQueryQueryVariables>;
export const PublicationItemQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PublicationItemQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lang"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}},"defaultValue":{"kind":"EnumValue","value":"en"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicationItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"navigationTitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"_seoMetaTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tag"}}]}}]}}]}}]} as unknown as DocumentNode<PublicationItemQueryQuery, PublicationItemQueryQueryVariables>;
export const PublicationsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PublicationsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lang"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}},"defaultValue":{"kind":"EnumValue","value":"en"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicationsPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"navigationTitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"_seoMetaTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tag"}}]}}]}}]}}]} as unknown as DocumentNode<PublicationsQueryQuery, PublicationsQueryQueryVariables>;
export const RegionItemQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"RegionItemQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lang"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}},"defaultValue":{"kind":"EnumValue","value":"en"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"regionItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"navigationTitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"_seoMetaTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tag"}}]}}]}}]}}]} as unknown as DocumentNode<RegionItemQueryQuery, RegionItemQueryQueryVariables>;
export const RegionsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"RegionsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lang"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}},"defaultValue":{"kind":"EnumValue","value":"en"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"regionsPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"navigationTitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"_seoMetaTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tag"}}]}}]}}]}}]} as unknown as DocumentNode<RegionsQueryQuery, RegionsQueryQueryVariables>;
export const TopicItemQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TopicItemQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lang"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}},"defaultValue":{"kind":"EnumValue","value":"en"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"topicItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"navigationTitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"_seoMetaTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tag"}}]}}]}}]}}]} as unknown as DocumentNode<TopicItemQueryQuery, TopicItemQueryQueryVariables>;
export const TopicsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TopicsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lang"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}},"defaultValue":{"kind":"EnumValue","value":"en"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"topicsPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"navigationTitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"introduction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"_seoMetaTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tag"}}]}}]}}]}}]} as unknown as DocumentNode<TopicsQueryQuery, TopicsQueryQueryVariables>;