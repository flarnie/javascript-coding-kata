import test from 'node:test';
import assert from 'node:assert/strict';
import LinkedListNode from './add-your-code-here.js';

/*
  LinkedListNode
  TODO
  - has a method `setNextItem` which inserts an item after that node in the
  linked list
  - has a method `removeSelf` which removes that node from the linked list
  - has a method `removeNextItem` which removes the next node from the linked list
*/

test('Can be constructed with the \'new\' keyword', (_) => {
  assert.doesNotThrow(() => {new LinkedListNode()});
});
test('Accepts an optional argument to set the initial value', (_) => {
  assert.doesNotThrow(new LinkedListNode('foo'));
  // This test passes because it does not throw an exception.
  // assert.strictEqual(LinkedList, 'linked list');
});
test('Has a value attribute that we can set via the constructor', (_) => {
  const value = 'foo';
  const linkedListNode = new LinkedListNode(value);
  assert.strictEqual(linkedListNode.value, value);
});
test('Has a value attribute that we can update directly', (_) => {
  const value = 'foo';
  const updatedValue = 'bar';
  const linkedListNode = new LinkedListNode(value);
  linkedListNode.value = updatedValue;
  assert.strictEqual(linkedListNode.value, updatedValue);
});
test('Has a nextItem attribute that we can set with the second constructor argument', (_) => {
  const value = 'foo';
  const anotherValue = 'bar';
  const linkedListNodeB = new LinkedListNode(anotherValue);
  const linkedListNodeA = new LinkedListNode(value, linkedListNodeB);
  assert.strictEqual(linkedListNodeA.nextItem, linkedListNodeB);
});
test('Does not allow directly mutating the nextValue attribute', (_) => {
  const value = 'foo';
  const anotherValue = 'bar';
  const linkedListNodeB = new LinkedListNode(anotherValue);
  const linkedListNodeA = new LinkedListNode(value, linkedListNodeB);
  assert.throws(() => {linkedListNodeA.nextItem = null});
});
