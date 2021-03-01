import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { locale } from './locale'

import { IonicVue } from '@ionic/vue'

import 'animate.css'

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
  .use(locale)

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
  IonAlert,
} from '@ionic/vue'
app
  .component('IonApp', IonApp)
  .component('IonAlert', IonAlert)
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

import './icons'
