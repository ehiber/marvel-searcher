import { charactersToRenderBySearch } from '../utils/charactersToRenderBySearch';

const example = [
    {id: 1 , name: "spider-man"},
    {id: 2 , name: "thor"},
    {id: 3 , name: "hulk"},
    {id: 4 , name: "ultimate spider-man"},
    {id: 5 , name: "iron man"},
]

const filter1 = "spider"

const filter2 = "r"

const filter3 = "vision"

test(`the filtering of ${example} is`, () => {
    expect(charactersToRenderBySearch(example,filter1)).toStrictEqual([
        {id: 1 , name: "spider-man"},
        {id: 4 , name: "ultimate spider-man"},
    ]);
});

test(`the filtering of ${example} is`, () => {
    expect(charactersToRenderBySearch(example,filter2)).toStrictEqual([
        {id: 1 , name: "spider-man"},
        {id: 2 , name: "thor"},
        {id: 4 , name: "ultimate spider-man"},
        {id: 5 , name: "iron man"},
    ]);
});

test(`the filtering of ${example} is`, () => {
    expect(charactersToRenderBySearch(example,filter3)).toStrictEqual([]);
});