/**
 * - type indications:
 * n  digits (numeric characters 0 to 9 only);
 * a  upper-case letters (alphabetic characters A-Z only); or
 * c  upper- and lower-case alphanumeric characters (A-Z, a-z and 0-9);
 * e  blank space.
 *
 * — length indications:
 * nn!  fixed length;
 * nn   maximum length
 */
export enum Structure {
  SK = '2!a2!n30c',
}
