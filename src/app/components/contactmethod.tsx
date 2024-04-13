import { Link } from '@nextui-org/react';

export default function ContactMethod(){
    return(
        <div className='flex justify-center'>
              <Link href='https://github.com/truongthinh118'
                isExternal
                showAnchorIcon
                anchorIcon={<i className="icon-light bi bi-github"></i>} />
              <Link href='https://www.linkedin.com/in/thinhdtt/'
                isExternal
                showAnchorIcon
                anchorIcon={<i className="icon-light bi bi-linkedin"></i>} />
              <Link href='mailto:truongthinh118001@gmail.com'
                isExternal
                showAnchorIcon
                anchorIcon={<i className="icon-light bi bi-envelope"></i>} />
            </div>
    )
}