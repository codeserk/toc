import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { IonicVue } from '@ionic/vue'

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css'
import '@ionic/vue/css/structure.css'
import '@ionic/vue/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css'
import '@ionic/vue/css/float-elements.css'
import '@ionic/vue/css/text-alignment.css'
import '@ionic/vue/css/text-transformation.css'
import '@ionic/vue/css/flex-utils.css'
import '@ionic/vue/css/display.css'

/* Theme variables */
import './theme/variables.css'

const app = createApp(App)
  .use(IonicVue)
  .use(router)

app.mixin({
  computed: {
    /**
     * Whether the dark mode is enabled.
     */
    isDarkMode(): boolean {
      return !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    },
  },
})

// Ionic components
import {
  IonApp,
  IonActionSheet,
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons,
  IonCheckbox,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuButton,
  IonMenuToggle,
  IonModal,
  IonNote,
  IonPage,
  IonPopover,
  IonRange,
  IonReorder,
  IonReorderGroup,
  IonRippleEffect,
  IonRouterOutlet,
  IonRow,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonSlide,
  IonSlides,
  IonSpinner,
  IonSplitPane,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonText,
  IonTextarea,
  IonTitle,
  IonToggle,
  IonToolbar,
  IonSelect,
  IonSelectOption,
  IonBadge,
  IonFooter,
} from '@ionic/vue'
app
  .component('IonApp', IonApp)
  .component('IonActionSheet', IonActionSheet)
  .component('IonAvatar', IonAvatar)
  .component('IonBackButton', IonBackButton)
  .component('IonButton', IonButton)
  .component('IonButtons', IonButtons)
  .component('IonCheckbox', IonCheckbox)
  .component('IonCol', IonCol)
  .component('IonContent', IonContent)
  .component('IonBadge', IonBadge)
  .component('IonFooter', IonFooter)
  .component('IonGrid', IonGrid)
  .component('IonHeader', IonHeader)
  .component('IonIcon', IonIcon)
  .component('IonInput', IonInput)
  .component('IonItem', IonItem)
  .component('IonItemDivider', IonItemDivider)
  .component('IonItemGroup', IonItemGroup)
  .component('IonItemOption', IonItemOption)
  .component('IonItemOptions', IonItemOptions)
  .component('IonItemSliding', IonItemSliding)
  .component('IonLabel', IonLabel)
  .component('IonList', IonList)
  .component('IonListHeader', IonListHeader)
  .component('IonMenu', IonMenu)
  .component('IonMenuButton', IonMenuButton)
  .component('IonMenuToggle', IonMenuToggle)
  .component('IonModal', IonModal)
  .component('IonNote', IonNote)
  .component('IonPage', IonPage)
  .component('IonPopover', IonPopover)
  .component('IonRange', IonRange)
  .component('IonReorder', IonReorder)
  .component('IonReorderGroup', IonReorderGroup)
  .component('IonRippleEffect', IonRippleEffect)
  .component('IonRouterOutlet', IonRouterOutlet)
  .component('IonRow', IonRow)
  .component('IonSearchbar', IonSearchbar)
  .component('IonSegment', IonSegment)
  .component('IonSegmentButton', IonSegmentButton)
  .component('IonSlide', IonSlide)
  .component('IonSlides', IonSlides)
  .component('IonSpinner', IonSpinner)
  .component('IonSplitPane', IonSplitPane)
  .component('IonTabBar', IonTabBar)
  .component('IonTabButton', IonTabButton)
  .component('IonTabs', IonTabs)
  .component('IonText', IonText)
  .component('IonTextarea', IonTextarea)
  .component('IonTitle', IonTitle)
  .component('IonToggle', IonToggle)
  .component('IonToolbar', IonToolbar)
  .component('IonSelect', IonSelect)
  .component('IonSelectOption', IonSelectOption)

router.isReady().then(() => {
  app.mount('#app')
})

// Icons
import { addIcons } from 'ionicons'
import {
  checkmarkOutline,
  saveOutline,
  createOutline,
  playCircleOutline,
  lockOpenOutline,
  lockClosedOutline,
  addCircleOutline,
  optionsOutline,
  ellipsisHorizontal,
  ellipsisVertical,
  happyOutline,
  alertCircleOutline,
  pencilOutline,
  helpOutline,
  chevronBackOutline,
  chevronForwardOutline,
  trashOutline,
  eyeOutline,
  eyeOffOutline,
  cloudOfflineOutline,
  cloudOutline,
  clipboardOutline,
  globeOutline,
  shareOutline,
  informationSharp,
  statsChartSharp,
  calendarOutline,
  refreshOutline,
  reorderThreeOutline,
  addOutline,
  closeOutline,
  checkmarkCircle,
  cog,
  flashOutline,
  flashOffOutline,
} from 'ionicons/icons'

addIcons({
  'checkmark-outline': checkmarkOutline,
  'flash-outline': flashOutline,
  'flash-off-outline': flashOffOutline,
  'checkmark-circle': checkmarkCircle,
  cog: cog,
  'close-outline': closeOutline,
  'add-outline': addOutline,
  'reorder-three-outline': reorderThreeOutline,
  'refresh-outline': refreshOutline,
  'trash-outline': trashOutline,
  'save-outline': saveOutline,
  'create-outline': createOutline,
  'play-circle-outline': playCircleOutline,
  'lock-open-outline': lockOpenOutline,
  'lock-closed-outline': lockClosedOutline,
  'add-circle-outline': addCircleOutline,
  'options-outline': optionsOutline,
  'ellipsis-horizontal': ellipsisHorizontal,
  'ellipsis-vertical': ellipsisVertical,
  'happy-outline': happyOutline,
  'alert-circle-outline': alertCircleOutline,
  'pencil-outline': pencilOutline,
  'help-outline': helpOutline,
  'eye-outline': eyeOutline,
  'eye-off-outline': eyeOffOutline,
  'clipboard-outline': clipboardOutline,
  'information-sharp': informationSharp,
  'globe-outline': globeOutline,
  'share-outline': shareOutline,
  'stats-sharp': statsChartSharp,
  'calendar-outline': calendarOutline,

  'cloud-outline': cloudOutline,
  'cloud-offline-outline': cloudOfflineOutline,

  // Arrows
  'chevron-back-outline': chevronBackOutline,
  'chevron-forward-outline': chevronForwardOutline,
})
