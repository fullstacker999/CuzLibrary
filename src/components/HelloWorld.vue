<template>
<div class="ui-section">
  <div class="row">

    <div class="heading">
      <CuzuiH4>Headings</CuzuiH4>

      <CuzuiH1>H1</CuzuiH1>
      <CuzuiH2>H2</CuzuiH2>
      <CuzuiH3>H3</CuzuiH3>
      <CuzuiH4>H4</CuzuiH4>
      <CuzuiH5>H5</CuzuiH5>
      <CuzuiH6>H6</CuzuiH6>
    </div>
    <div class="texts">
      <cuzui-paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id sem egestas, pulvinar risus in, ullamcorper massa. Vestibulum malesuada, leo rutrum accumsan finibus, justo ipsum vestibulum quam, ut fringilla lorem diam eu mi.
      </cuzui-paragraph>
      <cuzui-blogquote>
        Block Quote
      </cuzui-blogquote>
      <cuzui-a href="#">
        Text Link
      </cuzui-a>
      <cuzui-text-block>
        Text Block
      </cuzui-text-block>
    </div>

  </div>
  <div class="row">
    <cuzui-rich-text>
      <cuzui-h2>Rich Text Element</cuzui-h2>
      <cuzui-paragraph>
        The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.
      </cuzui-paragraph>
      <cuzui-h4>
        Static and dynamic content editing
      </cuzui-h4>
      <cuzui-paragraph>
        A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!
      </cuzui-paragraph>
      <cuzui-h4>
        How to customize formatting for each rich text
      </cuzui-h4>
      <cuzui-paragraph>
        Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the "When inside of" nested selector system.
      </cuzui-paragraph>
    </cuzui-rich-text>
  </div>
  <div class="buttons-row">
    <cuzui-button
      :color="color"
      :key="index"
      v-for="(color, index) in colors"
    >
      Button Text
    </cuzui-button>
  </div>
  <div class="buttons-row">
    <cuzui-button
      type="light"
      :color="color"
      :key="index"
      v-for="(color, index) in colors"
    >
      Button Text
    </cuzui-button>
  </div>
  <div class="buttons-row">
    <cuzui-button
      type="light-2"
      :color="color"
      :key="index"
      v-for="(color, index) in colors"
    >
      Button Text
    </cuzui-button>
  </div>
  <div class="buttons-row bordered">
    <cuzui-bordered-button
      isIcon
      iconType="existing-user"
    >
      Button Text
    </cuzui-bordered-button>
    <cuzui-bordered-button>
      Button Text
    </cuzui-bordered-button>
    <br />
    <CuzuiCheckbox style="margin-top: 10px;">
      This is some text <strong>inside of a div block</strong>.
    </CuzuiCheckbox>
    <CuzuiCheckbox type="primary" style="margin-top: 10px;">
      This is some text <strong>inside of a div block</strong>.
    </CuzuiCheckbox>
  </div>
</div>

</template>

<script>
import CuzuiH1 from './H1.vue';
import CuzuiH2 from './H2.vue';
import CuzuiH3 from './H3.vue';
import CuzuiH4 from './H4.vue';
import CuzuiH5 from './H5.vue';
import CuzuiH6 from './H6.vue';
import CuzuiParagraph from './Paragraph.vue';
import CuzuiBlogquote from './Blockquote.vue';
import CuzuiA from './A.vue';
import CuzuiTextBlock from './TextBlock.vue';
import CuzuiRichText from './RichText.vue';
import CuzuiButton from './Button.vue';
import CuzuiBorderedButton from './BorderedButton.vue';
import CuzuiCheckbox from './CheckBox.vue';

const colors = ['royal-blue', 'sea-green', 'purple', 'lime-green', 'blue', 'gold', 'red'];

export default {
  components: {
    CuzuiH1,
    CuzuiH2,
    CuzuiH3,
    CuzuiH4,
    CuzuiH5,
    CuzuiH6,
    CuzuiParagraph,
    CuzuiBlogquote,
    CuzuiA,
    CuzuiTextBlock,
    CuzuiRichText,
    CuzuiButton,
    CuzuiBorderedButton,
    CuzuiCheckbox
  },
  data () {
    return {
      colors: colors
    }
  }
}
</script>

<style lang='scss' scoped>
  .ui-section {
    max-width: 940px;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
  }
  .row {
    display: flex;
    padding: 30px;
  }
  .heading {
    width: 50vw;
    padding: 10px;
    text-align: center;
  }
  .texts {
    width: 50vw;
    padding: 10px 20px;
  }

  .buttons-row {
    padding: 20px;
    button {
      margin: 5px;
    }
    &.bordered {
      background-color: $royal-blue;
    }
  }

</style>
