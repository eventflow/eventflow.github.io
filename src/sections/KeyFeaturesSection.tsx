import React, { FC } from 'react'
import Typography from '@mui/material/Typography'
import FlightRoundedIcon from '@mui/icons-material/FlightRounded'
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded'
import LinearScaleRoundedIcon from '@mui/icons-material/LinearScaleRounded'
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded'
import { SvgIconComponent } from '@mui/icons-material'
import { styled } from '@mui/material/styles'

const KEY_FEATURES: IKeyFeature[] = [
  {
    header: 'Easy to use',
    description: `Designed with sensible defaults and implementations that make it
          easy to create an example application.`,
    IconComponent: FlightRoundedIcon,
  },
  {
    header: 'Highly configurable and extendable',
    description: `EventFlow uses interfaces for every part of its core, making it
      easy to replace or extend existing features with custom
      implementation.`,
    IconComponent: SettingsRoundedIcon,
  },
  {
    header: 'No use of threads or background workers',
    IconComponent: LinearScaleRoundedIcon,
  },
  {
    header: 'MIT licensed',
    description: `Easy to understand and use license for enterprise.`,
    IconComponent: MenuBookRoundedIcon,
  },
]

const makeFeatureIcon = (IconComponent: SvgIconComponent) =>
  (styled(IconComponent)(({ theme: { typography, spacing, breakpoints } }) => ({
    fontSize: typography.pxToRem(72),
    marginRight: spacing(2),
    [breakpoints.down('sm')]: {
      fontSize: typography.pxToRem(48),
    },
  })) as unknown) as SvgIconComponent

const KeyFeatures = styled('section')(
  ({ theme: { spacing, typography, breakpoints } }) => ({
    backgroundColor: '#fff',
    padding: spacing(9, 6),
    '& ul': {
      margin: '0 auto',
      padding: 0,
      listStyleType: 'none',
      maxWidth: '740px',
    },
    '& li': {
      display: 'flex',
      margin: 'auto',
      alignItems: 'start',
      '&.centeredIcon': {
        alignItems: 'center',
      },
      '&:not(:first-child)': {
        marginTop: spacing(4),
      },
      '& h2': {
        [breakpoints.down('sm')]: {
          fontSize: typography.pxToRem(24),
        },
      },
      '& p': {
        margin: spacing(1, 0, 0),
        maxWidth: '450px',
        fontSize: typography.pxToRem(18),
        [breakpoints.down('sm')]: {
          fontSize: typography.pxToRem(16),
        },
      },
    },
    [breakpoints.down('sm')]: {
      padding: spacing(4, 2),
    },
  })
)

interface IKeyFeature {
  header: string
  description?: string
  IconComponent: SvgIconComponent
}

const KeyFeature: FC<IKeyFeature> = ({
  header,
  description,
  IconComponent,
}) => {
  return (
    <li {...(!description && { className: 'centeredIcon' })}>
      <IconComponent color="primary" />
      <div>
        <Typography component="h2" variant="h4">
          {header}
        </Typography>
        {description && <p>{description}</p>}
      </div>
    </li>
  )
}

export const KeyFeaturesSection: FC<any> = () => {
  return (
    <KeyFeatures>
      <ul>
        {KEY_FEATURES.map(feature => (
          <KeyFeature
            header={feature.header}
            description={feature.description}
            IconComponent={makeFeatureIcon(feature.IconComponent)}
          />
        ))}
      </ul>
    </KeyFeatures>
  )
}
