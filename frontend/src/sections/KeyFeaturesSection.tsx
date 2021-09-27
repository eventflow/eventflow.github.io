import React, { FC } from 'react'
import Typography from '@material-ui/core/Typography'
import FlightRoundedIcon from '@material-ui/icons/FlightRounded'
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded'
import LinearScaleRoundedIcon from '@material-ui/icons/LinearScaleRounded'
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { SvgIconComponent } from '@material-ui/icons'

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

const styles = ({ palette, spacing, typography, breakpoints }: Theme) =>
  createStyles({
    keyFeatures: {
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
            fontSize: typography.pxToRem(spacing(3)),
          },
        },
        '& p': {
          margin: spacing(1, 0, 0),
          maxWidth: '450px',
          fontSize: typography.pxToRem(18),
          [breakpoints.down('sm')]: {
            fontSize: typography.pxToRem(spacing(2)),
          },
        },
      },
      [breakpoints.down('sm')]: {
        padding: spacing(4, 2),
      },
    },
    featureIcon: {
      fontSize: typography.pxToRem(spacing(9)),
      marginRight: spacing(2),
      [breakpoints.down('sm')]: {
        fontSize: typography.pxToRem(spacing(6)),
      },
    },
  })

const useStyles = makeStyles(styles)

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
  const classes = useStyles()
  return (
    <li {...(!description && { className: 'centeredIcon' })}>
      <IconComponent className={classes.featureIcon} color="primary" />
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
  const classes = useStyles()
  return (
    <section className={classes.keyFeatures}>
      <ul>
        {KEY_FEATURES.map(feature => (
          <KeyFeature
            header={feature.header}
            description={feature.description}
            IconComponent={feature.IconComponent}
          />
        ))}
      </ul>
    </section>
  )
}
