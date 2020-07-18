/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * A Phaser Input Event Data object.
 * 
 * This object is passed to the registered event listeners and allows you to stop any further propagation.
 * 
 * @typedef {object} Phaser.Types.Input.EventData
 * @since 3.15.1
 * 
 * @property {boolean} [canceled=false] - The canceled state of this Event.
 * @property {function} stopPropagation - Call this method to stop this event from passing any further down the event chain.
 */
