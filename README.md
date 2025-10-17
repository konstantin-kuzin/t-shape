# T-Shape UI Library

Маленькая, но гордая библиотека UI компонентов на React с TypeScript и styled-components. 
Предоставляет готовые компоненты для быстрой разработки интерфейсов с поддержкой тематизации и кастомизации.

## Возможности

- **React + TypeScript** - Полная типизация и поддержка современных стандартов
- **Styled Components** - CSS-in-JS с тематизацией
- **Storybook** - Интерактивная документация компонентов
- **Темизация** - Поддержка светлой и темной темы

## Установка

```bash
npm install @ds-architect/ui
```

## Компоненты

### Badge

Элемент для отображения статусов, категорий или меток. Используется для выделения важной информации, статусов или категоризации контента.

#### Свойства

| Свойство | Тип | По умолчанию | Описание |
|----------|-----|--------------|----------|
| `text` | `string` | `"Badge"` | Текст бейджа |
| `mode` | `"primary" \| "secondary" \| "neutral"` | `"primary"` | Цветовая схема |
| `size` | `"small" \| "medium"` | `"small"` | Размер бейджа |

#### Примеры использования

```tsx
import { Badge } from '@ds-architect/ui';

// Базовый бейдж
<Badge text="Новый" />

// Разные режимы
<Badge text="Primary" mode="primary" />
<Badge text="Secondary" mode="secondary" />
<Badge text="Neutral" mode="neutral" />

// Разные размеры
<Badge text="Small" size="small" />
<Badge text="Medium" size="medium" />
```

### Button

Интерактивные кнопки с различными режимами отображения. Поддерживает различные размеры, режимы (primary/secondary), состояния загрузки и отключения.

#### Свойства

| Свойство | Тип | По умолчанию | Описание |
|----------|-----|--------------|----------|
| `text` | `string` | - | Текст кнопки |
| `mode` | `"primary" \| "secondary"` | `"primary"` | Стиль кнопки |
| `size` | `"small" \| "medium" \| "large"` | `"medium"` | Размер кнопки |
| `disabled` | `boolean` | `false` | Заблокированное состояние |
| `loading` | `boolean` | `false` | Состояние загрузки |
| `iconBefore` | `"chevronLeft" \| "user"` | - | Иконка слева от текста |
| `iconAfter` | `"chevronRight" \| "user"` | - | Иконка справа от текста |

#### Примеры использования

```tsx
import { Button } from '@ds-architect/ui';

// Базовая кнопка
<Button text="Отправить" />

// Разные режимы
<Button text="Primary" mode="primary" />
<Button text="Secondary" mode="secondary" />

// Разные размеры
<Button text="Small" size="small" />
<Button text="Medium" size="medium" />
<Button text="Large" size="large" />

// С иконками
<Button text="Назад" iconBefore="chevronLeft" />
<Button text="Далее" iconAfter="chevronRight" />
<Button text="Пользователь" iconBefore="user" />

// Состояния
<Button text="Отправить" loading={true} />
<Button text="Заблокировано" disabled={true} />
```

### Card

Компонент для отображения контента в виде карточки. Используется для отображения новостей, статей или другого контента в карточном формате.

#### Свойства

| Свойство | Тип | По умолчанию | Описание |
|----------|-----|--------------|----------|
| `text` | `string` | `"Text"` | Основной текст карточки |
| `additionalText` | `string` | `"Text"` | Дополнительный текст |
| `badgeText` | `string` | - | Текст бейджа |
| `imageUrl` | `string` | - | URL фонового изображения |
| `interactive` | `boolean` | `true` | Интерактивность карточки |
| `buttonText` | `string` | `"Открыть"` | Текст кнопки |

#### Примеры использования

```tsx
import { Card } from '@ds-architect/ui';

// Базовая карточка
<Card
  text="Сегодня местами в Подмосковье идёт дождь"
  additionalText="31 июня 2025 г."
  badgeText="Новости"
/>

// С изображением
<Card
  text="Заголовок новости"
  additionalText="Дата публикации"
  badgeText="Важное"
  imageUrl="https://example.com/image.jpg"
  interactive={true}
/>

// Неинтерактивная карточка с кнопкой
<Card
  text="Описание товара"
  additionalText="Цена: 1000₽"
  badgeText="Акция"
  interactive={false}
  buttonText="Купить"
/>
```

### Icon

Векторные иконки из набора Feather Icons. Поддерживает различные размеры и режимы отображения.

#### Свойства

| Свойство | Тип | По умолчанию | Описание |
|----------|-----|--------------|----------|
| `iconName` | `string` | `"browser"` | Название иконки |
| `size` | `number` | `24` | Размер иконки в пикселях |
| `block` | `boolean` | `false` | Блочное отображение |

#### Доступные иконки

- `chevronDown` - стрелка вниз
- `chevronLeft` - стрелка влево
- `chevronRight` - стрелка вправо
- `chevronUp` - стрелка вверх
- `user` - пользователь

#### Примеры использования

```tsx
import { Icon } from '@ds-architect/ui';

// Базовая иконка
<Icon iconName="user" />

// Разные размеры
<Icon iconName="chevronRight" size={16} />
<Icon iconName="chevronRight" size={24} />
<Icon iconName="chevronRight" size={32} />

// Блочное отображение
<Icon iconName="user" block size={48} />
```

## Темизация

Библиотека поддерживает две встроенные темы: светлую и темную. Каждая тема определяет цвета для фона, текста, границ и акцентных элементов.

### Использование темы

```tsx
import { ThemeProvider, lightTheme, darkTheme } from '@ds-architect/ui';
import { App } from './App';

function AppWrapper() {
  return (
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  );
}
```

### Цветовая палитра

#### Основные цвета
- **Primary** (оранжевый) - основные действия и акценты
- **Secondary** (синий) - вспомогательные действия
- **Neutral** (серый) - нейтральные элементы
- **Storm** (темно-серый) - темные элементы

#### Цвета фона
- `bg.base` - основной фон
- `bg.primary` - акцентный фон
- `bg.secondary` - вспомогательный фон
- `bg.inverted` - инвертированный фон

#### Цвета текста
- `text.base` - основной текст
- `text.subtle` - дополнительный текст
- `text.inverted` - инвертированный текст

## Быстрый старт

### 1. Установка зависимостей

```bash
npm install @ds-architect/ui react styled-components
npm install --save-dev typescript @types/react @types/styled-components
```

### 2. Базовое использование

```tsx
import React from 'react';
import { Badge, Button, Card, Icon, ThemeProvider, lightTheme } from '@ds-architect/ui';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <div style={{ padding: '20px' }}>
        <h1>Пример использования компонентов</h1>

        <div style={{ marginBottom: '20px' }}>
          <Badge text="Новый" mode="primary" />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <Button text="Отправить" mode="primary" />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <Card
            text="Заголовок карточки"
            additionalText="Дополнительная информация"
            badgeText="Важное"
          />
        </div>

        <div>
          <Icon iconName="user" size={24} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
```

### 3. Кастомизация темы

```tsx
import { DefaultTheme } from 'styled-components';

const customTheme: DefaultTheme = {
  colors: {
    bg: {
      base: '#ffffff',
      primary: '#ff6b35',
      primaryHover: '#e55a2b',
      primaryActive: '#cc4a22',
      primarySubtle: '#fff4f0',
      secondary: '#4ecdc4',
      secondaryHover: '#45b7aa',
      secondaryActive: '#3da199',
      secondaryBoldStatic: '#2d8a82',
      secondarySubtle: '#f0fffe',
      inverted: '#2c3e50',
      invertedStatic: '#34495e',
    },
    text: {
      base: '#2c3e50',
      subtle: '#7f8c8d',
      primary: '#ff6b35',
      secondary: '#4ecdc4',
      inverted: '#ffffff',
      invertedStatic: '#ffffff',
    },
    fg: {
      base: '#2c3e50',
      primary: '#ff6b35',
      subtle: '#7f8c8d',
      inverted: '#ffffff',
      invertedStatic: '#ffffff',
    },
    border: {
      primary: '#ff6b35',
      primarySubtle: '#ffd4c4',
      inverted: '#ffffff',
      invertedStatic: '#ffffff',
    },
  },
};
```

## Документация

Для более подробной информации о каждом компоненте и интерактивных примерах изучите [Storybook документацию](https://storybook.js.org/).

```bash
# Запуск Storybook
npm run storybook
```

## Разработка

### Скрипты

```bash
# Запуск в режиме разработки
npm run dev

# Сборка для продакшена
npm run build

# Линтинг
npm run lint

# Сборка Storybook
npm run build-storybook
```

### Структура проекта

```
src/
├── lib/
│   ├── badge/          # Компонент Badge
│   ├── button/         # Компонент Button
│   ├── card/           # Компонент Card
│   ├── icon/           # Компонент Icon
│   └── theme/          # Система тематизации
├── stories/            # Storybook истории
└── App.tsx             # Главный компонент приложения
```


