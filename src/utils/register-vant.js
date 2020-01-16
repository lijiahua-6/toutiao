import Vue from 'vue' // 引入vue

// 加载按钮
import {
  Button,
  Cell,
  CellGroup,
  Icon,
  NavBar,
  Field,
  Toast,
  CountDown,
  Tabbar,
  TabbarItem,
  Image,
  Grid,
  GridItem,
  Dialog,
  List,
  Tab,
  Tabs
} from 'vant'
// 注册按钮
Vue
  .use(Button)
  .use(Cell)
  .use(CellGroup)
  .use(Icon)
  .use(NavBar)
  .use(Field)
  .use(Toast)
  .use(CountDown)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Image)
  .use(Grid)
  .use(GridItem)
  .use(Dialog)
  .use(List)
  .use(Tab)
  .use(Tabs)

// 之后所有 Vant 组件的注册就都写到上面的模块中，而组件的使用该怎么使用还是怎么使用
