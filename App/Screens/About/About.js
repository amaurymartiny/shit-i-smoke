// Copyright (c) 2018-2019, Amaury Martiny
// SPDX-License-Identifier: GPL-3.0

import React, { PureComponent } from 'react';
import { Constants } from 'expo';
import { Linking, ScrollView, StyleSheet, Text, View } from 'react-native';

import { Box } from './Box';
import * as theme from '../../utils/theme';
import { BackButton } from '../../components/BackButton';
import {i18n} from "../../localization";

export class About extends PureComponent {
  handleOpenAmaury = () => Linking.openURL('https://twitter.com/amaurymartiny');

  handleOpenAqi = () => Linking.openURL('http://aqicn.org/');

  handleOpenArticle = () =>
    Linking.openURL(
      'http://berkeleyearth.org/air-pollution-and-cigarette-equivalence/'
    );

  handleOpenGithub = () => Linking.openURL(Constants.manifest.extra.githubUrl);

  handleOpenMarcelo = () =>
    Linking.openURL('https://www.behance.net/marceloscoelho');

  render () {
    const { navigation } = this.props;
    return (
      <ScrollView style={theme.withPadding}>
        <BackButton onClick={navigation.pop} style={styles.backButton} />

        <View style={styles.section}>
          <Text style={styles.h2}>
            {i18n.t('about_how_do_you_calculate_the_number_of_cigarettes_title')}
          </Text>
          <Text style={theme.text}>
            {i18n.t('about_how_do_you_calculate_the_number_of_cigarettes_message_1')}{' '}
            <Text onPress={this.handleOpenArticle} style={theme.link}>
              {i18n.t('about_how_do_you_calculate_the_number_of_cigarettes_link_1')}
            </Text>
            {i18n.t('about_how_do_you_calculate_the_number_of_cigarettes_message_2')}{' '}
            <Text style={styles.micro}>&micro;</Text>
            g/m&sup3;
            {' \u207D'}
            &sup1;
            {'\u207E'}.
          </Text>
          <Box />
          <Text style={styles.articleLink}>
            (1){' '}
            <Text onPress={this.handleOpenArticle} style={theme.link}>
              http://berkeleyearth.org/air-pollution-and-cigarette-equivalence/
            </Text>
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.h2}>{i18n.t('about_where_does_data_come_from_title')}</Text>
          <Text style={theme.text}>
            {i18n.t('about_where_does_data_come_from_message_1')}{' '}
            <Text onPress={this.handleOpenAqi} style={theme.link}>
              {i18n.t('about_where_does_data_come_from_link_1')}
            </Text>{' '}
            {i18n.t('about_were_does_data_come_from_message_2')}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.h2}>
            {i18n.t('about_why_is_the_station_so_far_title')}
          </Text>
          <Text style={theme.text}>
            {i18n.t('about_why_is_the_station_so_far_message')}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.h2}>
            {i18n.t('about_weird_results_title')}
          </Text>
          <Text style={theme.text}>
            {i18n.t('about_weird_results_message_1')}{' '}
            <Text onPress={this.handleOpenAqi} style={theme.link}>
              {i18n.t('about_weird_results_link_1')}
            </Text>{' '}
            {i18n.t('about_weird_results_message_2')}
          </Text>
        </View>

        <View style={styles.credits}>
          <Text style={styles.h2}>Credits</Text>
          <Text style={theme.text}>
            Concept &amp; Development by{' '}
            <Text onPress={this.handleOpenAmaury} style={theme.link}>
              Amaury Martiny
            </Text>
            .{'\n'}
            Design &amp; Copywriting by{' '}
            <Text onPress={this.handleOpenMarcelo} style={theme.link}>
              Marcelo S. Coelho
            </Text>
            .{'\n'}
            {'\n'}
            Air quality data from{' '}
            <Text onPress={this.handleOpenAqi} style={theme.link}>
              WAQI
            </Text>
            .{'\n'}
            Source code{' '}
            <Text onPress={this.handleOpenGithub} style={theme.link}>
              available on Github
            </Text>
            .{'\n'}
            {'\n'}
            Shoot! I Smoke v{Constants.manifest.version}.
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  articleLink: {
    ...theme.text,
    fontSize: 8
  },
  backButton: {
    marginBottom: theme.spacing.normal,
    marginTop: theme.spacing.normal
  },
  credits: {
    borderTopColor: theme.iconBackgroundColor,
    borderTopWidth: 1,
    marginBottom: theme.spacing.normal,
    paddingTop: theme.spacing.big
  },
  h2: {
    ...theme.title,
    fontSize: 20,
    letterSpacing: 0,
    lineHeight: 24,
    marginBottom: theme.spacing.small
  },
  section: {
    marginBottom: theme.spacing.big
  }
});
