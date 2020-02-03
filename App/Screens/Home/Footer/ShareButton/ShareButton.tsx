// Sh**t! I Smoke
// Copyright (C) 2018-2020  Marcelo S. Coelho, Amaury Martiny

// Sh**t! I Smoke is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Sh**t! I Smoke is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Sh**t! I Smoke.  If not, see <http://www.gnu.org/licenses/>.

import React, { createRef, useContext } from 'react';
import { Share, StyleSheet, View } from 'react-native';
import { captureRef } from 'react-native-view-shot';

import { Button } from '../../../../components';
import { i18n } from '../../../../localization';
import { ApiContext } from '../../../../stores';
import { ShareImage } from './ShareImage';

const styles = StyleSheet.create({
  viewShot: {
    // We don't want to show this on the screen. If you have a better idea how
    // to achieve the same result (e.g. with a CSS equivalent of
    // `visible: hidden`), then open a PR
    left: -9999,
    position: 'absolute'
  }
});

export function ShareButton(): React.ReactElement {
  const { api } = useContext(ApiContext);
  const refViewShot = createRef<View>();

  async function handleShare(): Promise<void> {
    try {
      if (!api) {
        throw new Error(
          'Home/Footer/ShareButton.tsx only renders when `api` is defined.'
        );
      }

      const imageUrl = await captureRef(refViewShot, {
        format: 'png',
        quality: 1
      });
      const message = i18n.t('home_share_message', {
        cigarettes: Math.ceil(api.shootismoke.dailyCigarettes)
      });
      const title = i18n.t('home_share_title');

      // FIXME imageUrl doesn't work on Android
      // https://github.com/amaurymartiny/shoot-i-smoke/issues/250
      await Share.share({ message, title, url: imageUrl });
    } catch (error) {
      console.log(`<ShareButton> - ${error.message}`);
    }
  }

  return (
    <View>
      <View collapsable={false} ref={refViewShot} style={styles.viewShot}>
        <ShareImage />
      </View>
      <Button icon="share-alt" onPress={handleShare} type="secondary">
        {i18n.t('home_btn_share').toUpperCase()}
      </Button>
    </View>
  );
}
