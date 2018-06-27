import React from 'react';

import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';

import Textfit from "../src/components/Textfit"

storiesOf('React Textfit', module)
  .add('basic usage', () => (
    <Textfit
      rows={2} 
      expanded={boolean("expanded")}
      text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit mollitia, inventore veniam non quidem obcaecati ea impedit, eligendi officiis adipisci molestias sunt eveniet temporibus cumque! Eum voluptatibus sunt rerum iste?Expedita, illum odit hic dolor neque omnis cupiditate sed alias aspernatur obcaecati fugiat nihil enim commodi beatae saepe, molestiae dicta ipsam. Tenetur tempora similique ratione itaque hic ipsum iure amet!Sapiente praesentium quae assumenda repudiandae perferendis eaque debitis, aspernatur velit consequuntur fugit qui. Perspiciatis placeat, nisi aperiam quia iusto voluptatum commodi quae. Labore aspernatur architecto sint, laudantium dolor id illo?Consectetur molestias facilis animi dicta repellendus, excepturi, culpa praesentium iste reiciendis incidunt assumenda placeat mollitia beatae minima commodi recusandae autem? Reiciendis natus ea doloribus architecto! Voluptates optio maxime libero dolores? Voluptas id deleniti possimus, aliquam neque voluptates eius. Suscipit neque dolore natus quidem tenetur rem? Est dolores earum molestias tempore perspiciatis hic at, expedita nesciunt debitis porro qui corrupti voluptatum. Aliquam dolore expedita sint autem placeat dolorum non, ratione veniam sunt, totam magnam quia eum soluta nihil sit, fuga perferendis obcaecati culpa? Deleniti modi non assumenda temporibus laboriosam dolore fugit. Optio error neque aperiam earum velit dignissimos asperiores possimus eius unde dicta cum corporis autem, aliquid amet reiciendis voluptate exercitationem repellat obcaecati sunt. Ad pariatur ipsa officia quos cumque. Harum? Aliquam eum voluptates incidunt harum rem obcaecati eos ex illum distinctio maiores doloremque, quasi deserunt porro accusantium nemo suscipit quae alias, sint veniam laborum assumenda neque. Cumque obcaecati nobis quibusdam. At voluptatibus rem nemo sunt veritatis maxime laudantium libero explicabo, dolore iste, dicta iusto fuga doloribus odit ea dolorem cupiditate sint qui magnam fugit inventore saepe pariatur illum? Consequatur, odio! Nulla voluptatum quo culpa possimus maiores nihil illo, odit natus. Illum culpa reprehenderit maiores incidunt, vitae id pariatur, ducimus quidem laboriosam iusto eum vero repudiandae eos, recusandae consequuntur ullam accusantium. Corporis quam veritatis ex tempora aut voluptatum earum aspernatur voluptatem, magnam quaerat expedita culpa dolor dolorem sunt aliquid a! At, optio ab laudantium nemo esse hic cum obcaecati fugiat unde.`}
    />
  ))
