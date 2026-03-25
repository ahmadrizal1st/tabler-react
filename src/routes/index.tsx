// src/routes/index.tsx
import { Routes, Route, Navigate } from 'react-router-dom'
import { lazy, Suspense, type ComponentType } from 'react'

function load<P extends object>(factory: () => Promise<{ default: ComponentType<P> }>) {
  const Page = lazy(factory)
  return (props: P) => (
    <Suspense fallback={null}>
      <Page {...props} />
    </Suspense>
  )
}

// Auth
const SignIn = load(() => import('../pages/SignIn'))
const SignUp = load(() => import('../pages/SignUp'))
const ForgotPassword = load(() => import('../pages/ForgotPassword'))
const SignInCover = load(() => import('../pages/SignInCover'))
const SignInIllustration = load(() => import('../pages/SignInIllustration'))
const SignInLink = load(() => import('../pages/SignInLink'))
const TwoStepVerification = load(() => import('../pages/TwoStepVerification'))
const TwoStepVerificationCode = load(() => import('../pages/TwoStepVerificationCode'))
const AuthLock = load(() => import('../pages/AuthLock'))

// Errors
const Error404 = load(() => import('../pages/Error404'))
const Error500 = load(() => import('../pages/Error500'))
const ErrorMaintenance = load(() => import('../pages/ErrorMaintenance'))

// Dashboards
const Dashboard = load(() => import('../pages/Dashboard'))
const DashboardCrypto = load(() => import('../pages/DashboardCrypto'))

// UI Components
const AllElementsPage = load(() => import('../pages/AllElementsPage'))
const Accordion = load(() => import('../pages/AccordionPage'))
const Alerts = load(() => import('../pages/Alerts'))
const Avatars = load(() => import('../pages/Avatars'))
const Badges = load(() => import('../pages/Badges'))
const ColorPicker = load(() => import('../pages/ColorPickerPage'))
const Dropzone = load(() => import('../pages/DropzonePage'))
const Fullcalendar = load(() => import('../pages/FullcalendarPage'))
const InlinePlayer = load(() => import('../pages/InlinePlayerPage'))
const Lightbox = load(() => import('../pages/LightboxPage'))
const Maps = load(() => import('../pages/MapsPage'))
const MapFullsizePage = load(() => import('../pages/MapFullsizePage'))
const MapsVectorPage = load(() => import('../pages/MapsVectorPage'))
const TourPage = load(() => import('../pages/TourPage'))
const TurboLoaderPage = load(() => import('../pages/TurboLoaderPage'))
const WysiwygPage = load(() => import('../pages/WysiwygPage'))
const IconsPage = load(() => import('../pages/IconsPage'))
const EmailsPage = load(() => import('../pages/EmailsPage'))
const IllustrationsPage = load(() => import('../pages/IllustrationsPage'))
const PaymentProvidersPage = load(() => import('../pages/PaymentProvidersPage'))
const Buttons = load(() => import('../pages/Buttons'))
const CarouselPage = load(() => import('../pages/CarouselPage'))
const Cards = load(() => import('../pages/Cards'))
const CardActions = load(() => import('../pages/CardActions'))
const CardGradients = load(() => import('../pages/CardGradients'))
const CardsMasonry = load(() => import('../pages/CardsMasonry'))
const Colors = load(() => import('../pages/Colors'))
const Datatables = load(() => import('../pages/Datatables'))
const Flags = load(() => import('../pages/Flags'))
const FormElements = load(() => import('../pages/FormElements'))
const FormLayout = load(() => import('../pages/FormLayout'))
const Lists = load(() => import('../pages/ListsPage'))
const Progress = load(() => import('../pages/Progress'))
const Steps = load(() => import('../pages/Steps'))
const Tables = load(() => import('../pages/Tables'))
const Tabs = load(() => import('../pages/TabsPage'))
const Tags = load(() => import('../pages/TagsPage'))
const Toasts = load(() => import('../pages/ToastsPage'))
const Typography = load(() => import('../pages/Typography'))
const Widgets = load(() => import('../pages/Widgets'))
const Wizard = load(() => import('../pages/Wizard'))
const SortablePage = load(() => import('../pages/SortablePage'))
const Charts = load(() => import('../pages/Charts'))
const ActivityPage = load(() => import('../pages/ActivityPage'))
const ChatPage = load(() => import('../pages/ChatPage'))
const EmailInboxPage = load(() => import('../pages/EmailInbox'))
const CookieBannerPage = load<{ hide?: boolean }>(() => import('../pages/CookieBannerPage'))
const FAQPage = load<{ faq: FAQCategory[] }>(() => import('../pages/FAQPage'))
const GalleryPage = load(() => import('../pages/GalleryPage'))
const JobListingPage = load<{ jobs: JobItem[] }>(() => import('../pages/JobListingPage'))
const LogsPage = load(() => import('../pages/LogsPage'))
const PayPage = load(() => import('../pages/PayPage'))
const MusicPage = load(() => import('../pages/MusicPage'))
const PageLoader = load(() => import('../pages/PageLoader'))
const PhotogridPage = load(() => import('../pages/PhotogridPage'))
const PricingPage = load(() => import('../pages/PricingPage'))
const PricingTablePage = load(() => import('../pages/PricingTablePage'))
const SearchResultsPage = load<{ people: Person[]; photos: Photo[] }>(() => import('../pages/SearchResultsPage'))
const SettingsPage = load(() => import('../pages/SettingsPage'))
const SignaturesPage = load(() => import('../pages/SignaturesPage'))
const TasksPage = load(() => import('../pages/TasksPage'))
const TasksListPage = load<{ people: Person[] }>(() => import('../pages/TasksListPage'))
const TextFeaturesPage = load(() => import('../pages/TextFeaturesPage'))
const TrialEndedPage = load(() => import('../pages/TrialEndedPage'))
const UptimePage = load(() => import('../pages/UptimePage'))

// Pages
const Blank = load(() => import('../pages/Blank'))
const EmptyPage = load(() => import('../pages/EmptyPage'))
const Invoice = load(() => import('../pages/Invoice'))
const License = load(() => import('../pages/License'))
const Profile = load(() => import('../pages/Profile'))
const Settings = load(() => import('../pages/Settings'))
const TermsOfService = load(() => import('../pages/TermsOfService'))
const Users = load(() => import('../pages/Users'))
const DataGridPage = load(() => import('../pages/DataGridPage'))
const DropdownsPage = load(() => import('../pages/DropdownsPage'))
const ModalsPage = load(() => import('../pages/ModalsPage'))
const Prose = load(() => import('../pages/Prose'))
const Navigations = load(() => import('../pages/Navigations'))
const OffcanvasPage = load(() => import('../pages/OffcanvasPage'))
const PaginationPage = load(() => import('../pages/PaginationPage'))
const PatternsPage = load(() => import('../pages/PatternsPage'))
const PlaceholderPage = load(() => import('../pages/PlaceholderPage'))
const SegmentedControlPage = load(() => import('../pages/SegmentedControlPage'))
const ScrollSpyPage = load(() => import('../pages/ScrollSpyPage'))
const SocialIconsPage = load(() => import('../pages/SocialIconsPage'))
const StarRatingsPage = load(() => import('../pages/StarRatingsPage'))

// Layout Demos
const LayoutVertical = load(() => import('../pages/layout/LayoutVertical'))
const LayoutHorizontal = load(() => import('../pages/layout/LayoutHorizontal'))
const LayoutBoxed = load(() => import('../pages/layout/LayoutBoxed'))
const LayoutCondensed = load(() => import('../pages/layout/LayoutCondensed'))
const LayoutCombo = load(() => import('../pages/layout/LayoutCombo'))
const LayoutRtl = load(() => import('../pages/layout/LayoutRtl'))
const LayoutNavbarDark = load(() => import('../pages/layout/LayoutNavbarDark'))
const LayoutNavbarOverlap = load(() => import('../pages/layout/LayoutNavbarOverlap'))
const LayoutNavbarSticky = load(() => import('../pages/layout/LayoutNavbarSticky'))
const LayoutFluid = load(() => import('../pages/layout/LayoutFluid'))
const LayoutFluidVertical = load(() => import('../pages/layout/LayoutFluidVertical'))
const LayoutVerticalRight = load(() => import('../pages/layout/LayoutVerticalRight'))
const LayoutVerticalTransparent = load(() => import('../pages/layout/LayoutVerticalTransparent'))

// Marketing
const MarketingIndex = load(() => import('../pages/marketing/MarketingIndex'))
const MarketingHero = load(() => import('../pages/marketing/MarketingHero'))
const MarketingAbout = load(() => import('../pages/marketing/MarketingAbout'))
const MarketingPricing = load(() => import('../pages/marketing/MarketingPricing'))
const MarketingTestimonials = load(() => import('../pages/marketing/MarketingTestimonials'))
const MarketingText = load(() => import('../pages/marketing/MarketingText'))
const MarketingRealEstate = load(() => import('../pages/marketing/MarketingRealEstate'))

import type {
  Person,
  Commit,
  Task,
  Photo,
  Project,
  FAQCategory,
  JobItem,
  Mail,
  CryptoCurrency,
} from '../types'

interface AppRoutesProps {
  people?: Person[]
  commits?: Commit[]
  tasks?: Task[]
  mails?: Mail[]
  cryptoCurrencies?: CryptoCurrency[]
  cryptoOrders?: { sell_orders: any[]; buy_orders: any[] }
  cryptoMarkets?: any[]
  photos?: Photo[]
  projects?: Project[]
  activity?: any[]
  chats?: any[]
  faq?: FAQCategory[]
  jobs?: JobItem[]
}

export default function AppRoutes({
  people = [],
  commits = [],
  mails = [],
  photos = [],
  projects = [],
  activity = [],
  chats = [],
  faq = [],
  jobs = [],
}: AppRoutesProps) {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      {/* Auth */}
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/sign-in-cover" element={<SignInCover />} />
      <Route path="/sign-in-illustration" element={<SignInIllustration />} />
      <Route path="/sign-in-link" element={<SignInLink />} />
      <Route path="/2-step-verification" element={<TwoStepVerification />} />
      <Route path="/2-step-verification-code" element={<TwoStepVerificationCode />} />
      <Route path="/auth-lock" element={<AuthLock />} />

      {/* Errors */}
      <Route path="/error-404" element={<Error404 />} />
      <Route path="/error-500" element={<Error500 />} />
      <Route path="/error-maintenance" element={<ErrorMaintenance />} />

      {/* Dashboards */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard-crypto" element={<DashboardCrypto />} />

      {/* UI Components */}
      <Route path="/all-elements" element={<AllElementsPage />} />
      <Route path="/accordion" element={<Accordion />} />
      <Route path="/alerts" element={<Alerts />} />
      <Route path="/avatars" element={<Avatars people={people} />} />
      <Route path="/badges" element={<Badges />} />
      <Route path="/colorpicker" element={<ColorPicker />} />
      <Route path="/dropzone" element={<Dropzone />} />
      <Route path="/fullcalendar" element={<Fullcalendar />} />
      <Route path="/inline-player" element={<InlinePlayer />} />
      <Route path="/lightbox" element={<Lightbox />} />
      <Route path="/maps" element={<Maps />} />
      <Route path="/map-fullsize" element={<MapFullsizePage />} />
      <Route path="/maps-vector" element={<MapsVectorPage />} />
      <Route path="/tour" element={<TourPage />} />
      <Route path="/turbo-loader" element={<TurboLoaderPage />} />
      <Route path="/wysiwyg" element={<WysiwygPage />} />
      <Route path="/icons" element={<IconsPage />} />
      <Route path="/emails" element={<EmailsPage />} />
      <Route path="/illustrations" element={<IllustrationsPage />} />
      <Route path="/payment-providers" element={<PaymentProvidersPage />} />
      <Route path="/buttons" element={<Buttons />} />
      <Route path="/carousel" element={<CarouselPage />} />
      <Route path="/cards" element={<Cards />} />
      <Route path="/card-actions" element={<CardActions people={people} />} />
      <Route path="/card-gradients" element={<CardGradients people={people} />} />
      <Route path="/cards-masonry" element={<CardsMasonry />} />
      <Route path="/colors" element={<Colors />} />
      <Route path="/datatables" element={<Datatables />} />
      <Route path="/flags" element={<Flags />} />
      <Route path="/form-elements" element={<FormElements />} />
      <Route path="/form-layout" element={<FormLayout />} />
      <Route path="/lists" element={<Lists people={people} commits={commits} />} />
      <Route path="/progress" element={<Progress />} />
      <Route path="/steps" element={<Steps />} />
      <Route path="/tables" element={<Tables />} />
      <Route path="/tabs" element={<Tabs />} />
      <Route path="/tags" element={<Tags />} />
      <Route path="/toasts" element={<Toasts />} />
      <Route path="/typography" element={<Typography />} />
      <Route path="/widgets" element={<Widgets people={people} projects={projects} photos={photos} />} />
      <Route path="/wizard" element={<Wizard />} />
      <Route path="/sortable" element={<SortablePage />} />
      <Route path="/charts" element={<Charts />} />
      <Route path="/activity" element={<ActivityPage activity={activity} people={people} />} />
      <Route path="/chat" element={<ChatPage chats={chats} people={people} />} />
      <Route path="/email-inbox" element={<EmailInboxPage mails={mails} />} />
      <Route path="/cookie-banner" element={<CookieBannerPage />} />
      <Route path="/faq" element={<FAQPage faq={faq} />} />
      <Route path="/gallery" element={<GalleryPage photos={photos} people={people} />} />
      <Route path="/job-listing" element={<JobListingPage jobs={jobs} />} />
      <Route path="/music" element={<MusicPage />} />
      <Route path="/logs" element={<LogsPage />} />
      <Route path="/page-loader" element={<PageLoader />} />
      <Route path="/photogrid" element={<PhotogridPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/pricing-table" element={<PricingTablePage />} />
      <Route path="/search-results" element={<SearchResultsPage people={people} photos={photos} />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/signatures" element={<SignaturesPage />} />
      <Route path="/tasks" element={<TasksPage />} />
      <Route path="/tasks-list" element={<TasksListPage people={people} />} />
      <Route path="/text-features" element={<TextFeaturesPage />} />
      <Route path="/trial-ended" element={<TrialEndedPage />} />
      <Route path="/uptime" element={<UptimePage />} />
      <Route path="/pay" element={<PayPage people={people} />} />

      {/* Pages */}
      <Route path="/blank" element={<Blank />} />
      <Route path="/empty" element={<EmptyPage />} />
      <Route path="/invoice" element={<Invoice />} />
      <Route path="/license" element={<License />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/users" element={<Users people={people} />} />
      <Route path="/datagrid" element={<DataGridPage people={people} />} />
      <Route path="/dropdowns" element={<DropdownsPage people={people} />} />
      <Route path="/modals" element={<ModalsPage />} />
      <Route path="/prose" element={<Prose photos={photos} />} />
      <Route path="/navigation" element={<Navigations />} />
      <Route path="/offcanvas" element={<OffcanvasPage />} />
      <Route path="/pagination" element={<PaginationPage />} />
      <Route path="/patterns" element={<PatternsPage />} />
      <Route path="/placeholder" element={<PlaceholderPage />} />
      <Route path="/segmented-control" element={<SegmentedControlPage />} />
      <Route path="/scroll-spy" element={<ScrollSpyPage />} />
      <Route path="/social-icons" element={<SocialIconsPage />} />
      <Route path="/stars-rating" element={<StarRatingsPage />} />

      {/* Layout Demos */}
      <Route path="/layout-vertical" element={<LayoutVertical />} />
      <Route path="/layout-horizontal" element={<LayoutHorizontal />} />
      <Route path="/layout-boxed" element={<LayoutBoxed />} />
      <Route path="/layout-condensed" element={<LayoutCondensed />} />
      <Route path="/layout-combo" element={<LayoutCombo />} />
      <Route path="/layout-rtl" element={<LayoutRtl />} />
      <Route path="/layout-navbar-dark" element={<LayoutNavbarDark />} />
      <Route path="/layout-navbar-overlap" element={<LayoutNavbarOverlap />} />
      <Route path="/layout-navbar-sticky" element={<LayoutNavbarSticky />} />
      <Route path="/layout-fluid" element={<LayoutFluid />} />
      <Route path="/layout-fluid-vertical" element={<LayoutFluidVertical />} />
      <Route path="/layout-vertical-right" element={<LayoutVerticalRight />} />
      <Route path="/layout-vertical-transparent" element={<LayoutVerticalTransparent />} />

      {/* Marketing */}
      <Route path="/marketing" element={<MarketingIndex />} />
      <Route path="/marketing/hero" element={<MarketingHero />} />
      <Route path="/marketing/about" element={<MarketingAbout />} />
      <Route path="/marketing/pricing" element={<MarketingPricing />} />
      <Route path="/marketing/testimonials" element={<MarketingTestimonials />} />
      <Route path="/marketing/text" element={<MarketingText />} />
      <Route path="/marketing/real-estate" element={<MarketingRealEstate />} />

      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}