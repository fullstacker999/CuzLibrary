import Vue from 'vue';
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

const Components = {
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
};

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

export default Components;