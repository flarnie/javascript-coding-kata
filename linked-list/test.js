import test from 'node:test';
import assert from 'node:assert/strict';
import LinkedListNode from './add-your-code-here.js';

/*
  LinkedListNode
  TODO
  - can be constructed with the 'new' keyword, and accepts an optional argument
  to set the initial value.
  - has a value attribute that we can read/write
  - has a nextItem attribute that we can read but not set directly
  - has a method `setNextItem` which inserts an item after that node in the
  linked list
  - has a method `removeSelf` which removes that node from the linked list
  - has a method `removeNextItem` which removes the next node from the linked list
*/

test('synchronous passing test', (t) => {
  // This test passes because it does not throw an exception.
  assert.strictEqual(LinkedList, 'linked list');
});
