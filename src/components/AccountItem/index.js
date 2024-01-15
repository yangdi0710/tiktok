import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/caccfaf25b26cef840c92e48630b3a9b~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1705500000&x-signature=mULI5IIn9nEQlGSogYO8pNe7uc8%3D"
                alt="ABCD"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>nguyenvana123</span>
            </div>
        </div>
    );
}

export default AccountItem;
