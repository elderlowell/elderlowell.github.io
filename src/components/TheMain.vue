<script lang="ts" setup>
import { computed, onMounted, ref, watch } from 'vue'

const today = computed(() => {
  const now = new Date()
  return new Date(now.getFullYear(), now.getMonth(), now.getDate()).toDateString()
})

const assignments = ref([
  { date: '8/1/2023', assignment: [{ book: 'Title Page', chapter: 0 }, { book: 'Introduction', chapter: 0 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/bofm-title?lang=eng', completed: false },
  { date: '8/2/2023', assignment: [{ book: 'Testimony of 3', chapter: 0 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/three?lang=eng', completed: false },
  { date: '8/3/2023', assignment: [{ book: 'Testimony of 8', chapter: 0 }, { book: 'Testimony of JS', chapter: 0 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/eight?lang=eng', completed: false },
  { date: '8/4/2023', assignment: [{ book: 'Brief Explanation', chapter: 0 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/explanation?lang=eng', completed: false },
  { date: '8/5/2023', assignment: [{ book: '1 Nephi', chapter: 1 }, { book: '1 Nephi', chapter: 2 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/1?lang=eng', completed: false },
  { date: '8/6/2023', assignment: [{ book: '1 Nephi', chapter: 3 }, { book: '1 Nephi', chapter: 4 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/3?lang=eng', completed: false },
  { date: '8/7/2023', assignment: [{ book: '1 Nephi', chapter: 5 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/5?lang=eng', completed: false },
  { date: '8/8/2023', assignment: [{ book: '1 Nephi', chapter: 6 }, { book: '1 Nephi', chapter: 7 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/6?lang=eng', completed: false },
  { date: '8/9/2023', assignment: [{ book: '1 Nephi', chapter: 8 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/8?lang=eng', completed: false },
  { date: '8/10/2023', assignment: [{ book: '1 Nephi', chapter: 9 }, { book: '1 Nephi', chapter: 10 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/9?lang=eng', completed: false },
  { date: '8/11/2023', assignment: [{ book: '1 Nephi', chapter: 11 }, { book: '1 Nephi', chapter: 12 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/11?lang=eng', completed: false },
  { date: '8/12/2023', assignment: [{ book: '1 Nephi', chapter: 13 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/13?lang=eng', completed: false },
  { date: '8/13/2023', assignment: [{ book: '1 Nephi', chapter: 14 }, { book: '1 Nephi', chapter: 15 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/14?lang=eng', completed: false },
  { date: '8/14/2023', assignment: [{ book: '1 Nephi', chapter: 16 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/16?lang=eng', completed: false },
  { date: '8/15/2023', assignment: [{ book: '1 Nephi', chapter: 17 }, { book: '1 Nephi', chapter: 18 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/17?lang=eng', completed: false },
  { date: '8/16/2023', assignment: [{ book: '1 Nephi', chapter: 19 }, { book: '1 Nephi', chapter: 20 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/19?lang=eng', completed: false },
  { date: '8/17/2023', assignment: [{ book: '1 Nephi', chapter: 21 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/21?lang=eng', completed: false },
  { date: '8/18/2023', assignment: [{ book: '1 Nephi', chapter: 22 }, { book: '2 Nephi', chapter: 1 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/22?lang=eng', completed: false },
  { date: '8/19/2023', assignment: [{ book: '2 Nephi', chapter: 2 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/2?lang=eng', completed: false },
  { date: '8/20/2023', assignment: [{ book: '2 Nephi', chapter: 3 }, { book: '2 Nephi', chapter: 4 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/4?lang=eng', completed: false },
  { date: '8/21/2023', assignment: [{ book: '2 Nephi', chapter: 5 }, { book: '2 Nephi', chapter: 6 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/6?lang=eng', completed: false },
  { date: '8/22/2023', assignment: [{ book: '2 Nephi', chapter: 7 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/7?lang=eng', completed: false },
  { date: '8/23/2023', assignment: [{ book: '2 Nephi', chapter: 8 }, { book: '2 Nephi', chapter: 9 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/9?lang=eng', completed: false },
  { date: '8/24/2023', assignment: [{ book: '2 Nephi', chapter: 10 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/10?lang=eng', completed: false },
  { date: '8/25/2023', assignment: [{ book: '2 Nephi', chapter: 11 }, { book: '2 Nephi', chapter: 12 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/11?lang=eng', completed: false },
  { date: '8/26/2023', assignment: [{ book: '2 Nephi', chapter: 13 }, { book: '2 Nephi', chapter: 14 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/13?lang=eng', completed: false },
  { date: '8/27/2023', assignment: [{ book: '2 Nephi', chapter: 15 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/15?lang=eng', completed: false },
  { date: '8/28/2023', assignment: [{ book: '2 Nephi', chapter: 16 }, { book: '2 Nephi', chapter: 17 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/16?lang=eng', completed: false },
  { date: '8/29/2023', assignment: [{ book: '2 Nephi', chapter: 18 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/18?lang=eng', completed: false },
  { date: '8/30/2023', assignment: [{ book: '2 Nephi', chapter: 19 }, { book: '2 Nephi', chapter: 20 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/19?lang=eng', completed: false },
  { date: '8/31/2023', assignment: [{ book: '2 Nephi', chapter: 21 }, { book: '2 Nephi', chapter: 22 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/21?lang=eng', completed: false },
  { date: '9/1/2023', assignment: [{ book: '2 Nephi', chapter: 23 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/23?lang=eng', completed: false },
  { date: '9/2/2023', assignment: [{ book: '2 Nephi', chapter: 24 }, { book: '2 Nephi', chapter: 25 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/24?lang=eng', completed: false },
  { date: '9/3/2023', assignment: [{ book: '2 Nephi', chapter: 26 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/26?lang=eng', completed: false },
  { date: '9/4/2023', assignment: [{ book: '2 Nephi', chapter: 27 }, { book: '2 Nephi', chapter: 28 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/27?lang=eng', completed: false },
  { date: '9/5/2023', assignment: [{ book: '2 Nephi', chapter: 29 }, { book: '2 Nephi', chapter: 30 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/29?lang=eng', completed: false },
  { date: '9/6/2023', assignment: [{ book: '2 Nephi', chapter: 31 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/31?lang=eng', completed: false },
  { date: '9/7/2023', assignment: [{ book: '2 Nephi', chapter: 32 }, { book: '2 Nephi', chapter: 33 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/32?lang=eng', completed: false },
  { date: '9/8/2023', assignment: [{ book: 'Jacob', chapter: 1 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/jacob/1?lang=eng', completed: false },
  { date: '9/9/2023', assignment: [{ book: 'Jacob', chapter: 2 }, { book: 'Jacob', chapter: 3 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/jacob/2?lang=eng', completed: false },
  { date: '9/10/2023', assignment: [{ book: 'Jacob', chapter: 4 }, { book: 'Jacob', chapter: 5 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/jacob/3?lang=eng', completed: false },
  { date: '9/11/2023', assignment: [{ book: 'Jacob', chapter: 6 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/jacob/6?lang=eng', completed: false },
  { date: '9/12/2023', assignment: [{ book: 'Jacob', chapter: 7 }, { book: 'Enos', chapter: 0 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/jacob/7?lang=eng', completed: false },
  { date: '9/13/2023', assignment: [{ book: 'Jarom', chapter: 0 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/jarom/1?lang=eng', completed: false },
  { date: '9/14/2023', assignment: [{ book: 'Omni', chapter: 0 }, { book: 'Words of Mormon', chapter: 0 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/omni/1?lang=eng', completed: false },
  { date: '9/15/2023', assignment: [{ book: 'Mosiah', chapter: 1 }, { book: 'Mosiah', chapter: 2 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/1?lang=eng', completed: false },
  { date: '9/16/2023', assignment: [{ book: 'Mosiah', chapter: 3 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/3?lang=eng', completed: false },
  { date: '9/17/2023', assignment: [{ book: 'Mosiah', chapter: 4 }, { book: 'Mosiah', chapter: 5 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/4?lang=eng', completed: false },
  { date: '9/18/2023', assignment: [{ book: 'Mosiah', chapter: 6 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/6?lang=eng', completed: false },
  { date: '9/19/2023', assignment: [{ book: 'Mosiah', chapter: 7 }, { book: 'Mosiah', chapter: 8 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/7?lang=eng', completed: false },
  { date: '9/20/2023', assignment: [{ book: 'Mosiah', chapter: 9 }, { book: 'Mosiah', chapter: 10 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/9?lang=eng', completed: false },
  { date: '9/21/2023', assignment: [{ book: 'Mosiah', chapter: 11 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/11?lang=eng', completed: false },
  { date: '9/22/2023', assignment: [{ book: 'Mosiah', chapter: 12 }, { book: 'Mosiah', chapter: 13 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/12?lang=eng', completed: false },
  { date: '9/23/2023', assignment: [{ book: 'Mosiah', chapter: 14 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/14?lang=eng', completed: false },
  { date: '9/24/2023', assignment: [{ book: 'Mosiah', chapter: 15 }, { book: 'Mosiah', chapter: 16 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/15?lang=eng', completed: false },
  { date: '9/25/2023', assignment: [{ book: 'Mosiah', chapter: 17 }, { book: 'Mosiah', chapter: 18 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/17?lang=eng', completed: false },
  { date: '9/26/2023', assignment: [{ book: 'Mosiah', chapter: 19 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/19?lang=eng', completed: false },
  { date: '9/27/2023', assignment: [{ book: 'Mosiah', chapter: 20 }, { book: 'Mosiah', chapter: 21 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/20?lang=eng', completed: false },
  { date: '9/28/2023', assignment: [{ book: 'Mosiah', chapter: 22 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/22?lang=eng', completed: false },
  { date: '9/29/2023', assignment: [{ book: 'Mosiah', chapter: 23 }, { book: 'Mosiah', chapter: 24 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/23?lang=eng', completed: false },
  { date: '9/30/2023', assignment: [{ book: 'Mosiah', chapter: 25 }, { book: 'Mosiah', chapter: 26 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/25?lang=eng', completed: false },
  { date: '10/1/2023', assignment: [{ book: 'Mosiah', chapter: 27 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/27?lang=eng', completed: false },
  { date: '10/2/2023', assignment: [{ book: 'Mosiah', chapter: 28 }, { book: 'Mosiah', chapter: 29 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/28?lang=eng', completed: false },
  { date: '10/3/2023', assignment: [{ book: 'Alma', chapter: 1 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/1?lang=eng', completed: false },
  { date: '10/4/2023', assignment: [{ book: 'Alma', chapter: 2 }, { book: 'Alma', chapter: 3 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/2?lang=eng', completed: false },
  { date: '10/5/2023', assignment: [{ book: 'Alma', chapter: 4 }, { book: 'Alma', chapter: 5 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/4?lang=eng', completed: false },
  { date: '10/6/2023', assignment: [{ book: 'Alma', chapter: 6 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/6?lang=eng', completed: false },
  { date: '10/7/2023', assignment: [{ book: 'Alma', chapter: 7 }, { book: 'Alma', chapter: 8 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/7?lang=eng', completed: false },
  { date: '10/8/2023', assignment: [{ book: 'Alma', chapter: 9 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/9?lang=eng', completed: false },
  { date: '10/9/2023', assignment: [{ book: 'Alma', chapter: 10 }, { book: 'Alma', chapter: 11 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/10?lang=eng', completed: false },
  { date: '10/10/2023', assignment: [{ book: 'Alma', chapter: 12 }, { book: 'Alma', chapter: 13 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/12?lang=eng', completed: false },
  { date: '10/11/2023', assignment: [{ book: 'Alma', chapter: 14 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/14?lang=eng', completed: false },
  { date: '10/12/2023', assignment: [{ book: 'Alma', chapter: 15 }, { book: 'Alma', chapter: 16 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/15?lang=eng', completed: false },
  { date: '10/13/2023', assignment: [{ book: 'Alma', chapter: 17 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/17?lang=eng', completed: false },
  { date: '10/14/2023', assignment: [{ book: 'Alma', chapter: 18 }, { book: 'Alma', chapter: 19 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/18?lang=eng', completed: false },
  { date: '10/15/2023', assignment: [{ book: 'Alma', chapter: 20 }, { book: 'Alma', chapter: 21 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/20?lang=eng', completed: false },
  { date: '10/16/2023', assignment: [{ book: 'Alma', chapter: 22 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/22?lang=eng', completed: false },
  { date: '10/17/2023', assignment: [{ book: 'Alma', chapter: 23 }, { book: 'Alma', chapter: 24 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/23?lang=eng', completed: false },
  { date: '10/18/2023', assignment: [{ book: 'Alma', chapter: 25 }, { book: 'Alma', chapter: 26 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/25?lang=eng', completed: false },
  { date: '10/19/2023', assignment: [{ book: 'Alma', chapter: 27 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/27?lang=eng', completed: false },
  { date: '10/20/2023', assignment: [{ book: 'Alma', chapter: 28 }, { book: 'Alma', chapter: 29 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/28?lang=eng', completed: false },
  { date: '10/21/2023', assignment: [{ book: 'Alma', chapter: 30 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/30?lang=eng', completed: false },
  { date: '10/22/2023', assignment: [{ book: 'Alma', chapter: 31 }, { book: 'Alma', chapter: 32 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/31?lang=eng', completed: false },
  { date: '10/23/2023', assignment: [{ book: 'Alma', chapter: 33 }, { book: 'Alma', chapter: 34 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/33?lang=eng', completed: false },
  { date: '10/24/2023', assignment: [{ book: 'Alma', chapter: 35 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/35?lang=eng', completed: false },
  { date: '10/25/2023', assignment: [{ book: 'Alma', chapter: 36 }, { book: 'Alma', chapter: 37 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/36?lang=eng', completed: false },
  { date: '10/26/2023', assignment: [{ book: 'Alma', chapter: 38 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/38?lang=eng', completed: false },
  { date: '10/27/2023', assignment: [{ book: 'Alma', chapter: 39 }, { book: 'Alma', chapter: 40 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/39?lang=eng', completed: false },
  { date: '10/28/2023', assignment: [{ book: 'Alma', chapter: 41 }, { book: 'Alma', chapter: 42 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/41?lang=eng', completed: false },
  { date: '10/29/2023', assignment: [{ book: 'Alma', chapter: 43 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/43?lang=eng', completed: false },
  { date: '10/30/2023', assignment: [{ book: 'Alma', chapter: 44 }, { book: 'Alma', chapter: 45 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/44?lang=eng', completed: false },
  { date: '10/31/2023', assignment: [{ book: 'Alma', chapter: 46 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/46?lang=eng', completed: false },
  { date: '11/1/2023', assignment: [{ book: 'Alma', chapter: 47 }, { book: 'Alma', chapter: 48 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/47?lang=eng', completed: false },
  { date: '11/2/2023', assignment: [{ book: 'Alma', chapter: 49 }, { book: 'Alma', chapter: 50 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/49?lang=eng', completed: false },
  { date: '11/3/2023', assignment: [{ book: 'Alma', chapter: 51 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/51?lang=eng', completed: false },
  { date: '11/4/2023', assignment: [{ book: 'Alma', chapter: 52 }, { book: 'Alma', chapter: 53 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/52?lang=eng', completed: false },
  { date: '11/5/2023', assignment: [{ book: 'Alma', chapter: 54 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/54?lang=eng', completed: false },
  { date: '11/6/2023', assignment: [{ book: 'Alma', chapter: 55 }, { book: 'Alma', chapter: 56 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/55?lang=eng', completed: false },
  { date: '11/7/2023', assignment: [{ book: 'Alma', chapter: 57 }, { book: 'Alma', chapter: 58 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/57?lang=eng', completed: false },
  { date: '11/8/2023', assignment: [{ book: 'Alma', chapter: 59 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/59?lang=eng', completed: false },
  { date: '11/9/2023', assignment: [{ book: 'Alma', chapter: 60 }, { book: 'Alma', chapter: 61 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/60?lang=eng', completed: false },
  { date: '11/10/2023', assignment: [{ book: 'Alma', chapter: 62 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/62?lang=eng', completed: false },
  { date: '11/11/2023', assignment: [{ book: 'Alma', chapter: 63 }, { book: 'Helaman', chapter: 1 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/63?lang=eng', completed: false },
  { date: '11/12/2023', assignment: [{ book: 'Helaman', chapter: 2 }, { book: 'Helaman', chapter: 3 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/hel/2?lang=eng', completed: false },
  { date: '11/13/2023', assignment: [{ book: 'Helaman', chapter: 4 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/hel/4?lang=eng', completed: false },
  { date: '11/14/2023', assignment: [{ book: 'Helaman', chapter: 5 }, { book: 'Helaman', chapter: 6 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/hel/5?lang=eng', completed: false },
  { date: '11/15/2023', assignment: [{ book: 'Helaman', chapter: 7 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/hel/7?lang=eng', completed: false },
  { date: '11/16/2023', assignment: [{ book: 'Helaman', chapter: 8 }, { book: 'Helaman', chapter: 9 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/hel/8?lang=eng', completed: false },
  { date: '11/17/2023', assignment: [{ book: 'Helaman', chapter: 10 }, { book: 'Helaman', chapter: 11 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/hel/10?lang=eng', completed: false },
  { date: '11/18/2023', assignment: [{ book: 'Helaman', chapter: 12 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/hel/12?lang=eng', completed: false },
  { date: '11/19/2023', assignment: [{ book: 'Helaman', chapter: 13 }, { book: 'Helaman', chapter: 14 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/hel/13?lang=eng', completed: false },
  { date: '11/20/2023', assignment: [{ book: 'Helaman', chapter: 15 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/hel/15?lang=eng', completed: false },
  { date: '11/21/2023', assignment: [{ book: 'Helaman', chapter: 16 }, { book: '3 Nephi', chapter: 1 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/hel/16?lang=eng', completed: false },
  { date: '11/22/2023', assignment: [{ book: '3 Nephi', chapter: 2 }, { book: '3 Nephi', chapter: 3 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/2?lang=eng', completed: false },
  { date: '11/23/2023', assignment: [{ book: '3 Nephi', chapter: 4 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/4?lang=eng', completed: false },
  { date: '11/24/2023', assignment: [{ book: '3 Nephi', chapter: 5 }, { book: '3 Nephi', chapter: 6 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/5?lang=eng', completed: false },
  { date: '11/25/2023', assignment: [{ book: '3 Nephi', chapter: 7 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/7?lang=eng', completed: false },
  { date: '11/26/2023', assignment: [{ book: '3 Nephi', chapter: 8 }, { book: '3 Nephi', chapter: 9 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/8?lang=eng', completed: false },
  { date: '11/27/2023', assignment: [{ book: '3 Nephi', chapter: 10 }, { book: '3 Nephi', chapter: 11 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/10?lang=eng', completed: false },
  { date: '11/28/2023', assignment: [{ book: '3 Nephi', chapter: 12 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/12?lang=eng', completed: false },
  { date: '11/29/2023', assignment: [{ book: '3 Nephi', chapter: 13 }, { book: '3 Nephi', chapter: 14 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/13?lang=eng', completed: false },
  { date: '11/30/2023', assignment: [{ book: '3 Nephi', chapter: 15 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/15?lang=eng', completed: false },
  { date: '12/1/2023', assignment: [{ book: '3 Nephi', chapter: 16 }, { book: '3 Nephi', chapter: 17 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/16?lang=eng', completed: false },
  { date: '12/2/2023', assignment: [{ book: '3 Nephi', chapter: 18 }, { book: '3 Nephi', chapter: 19 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/18?lang=eng', completed: false },
  { date: '12/3/2023', assignment: [{ book: '3 Nephi', chapter: 20 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/20?lang=eng', completed: false },
  { date: '12/4/2023', assignment: [{ book: '3 Nephi', chapter: 21 }, { book: '3 Nephi', chapter: 22 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/21?lang=eng', completed: false },
  { date: '12/5/2023', assignment: [{ book: '3 Nephi', chapter: 23 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/23?lang=eng', completed: false },
  { date: '12/6/2023', assignment: [{ book: '3 Nephi', chapter: 24 }, { book: '3 Nephi', chapter: 25 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/24?lang=eng', completed: false },
  { date: '12/7/2023', assignment: [{ book: '3 Nephi', chapter: 26 }, { book: '3 Nephi', chapter: 27 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/26?lang=eng', completed: false },
  { date: '12/8/2023', assignment: [{ book: '3 Nephi', chapter: 28 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/28?lang=eng', completed: false },
  { date: '12/9/2023', assignment: [{ book: '3 Nephi', chapter: 29 }, { book: '3 Nephi', chapter: 30 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/29?lang=eng', completed: false },
  { date: '12/10/2023', assignment: [{ book: '4 Nephi', chapter: 0 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/4-ne/1?lang=eng', completed: false },
  { date: '12/11/2023', assignment: [{ book: 'Mormon', chapter: 1 }, { book: 'Mormon', chapter: 2 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/morm/1?lang=eng', completed: false },
  { date: '12/12/2023', assignment: [{ book: 'Mormon', chapter: 3 }, { book: 'Mormon', chapter: 4 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/morm/3?lang=eng', completed: false },
  { date: '12/13/2023', assignment: [{ book: 'Mormon', chapter: 5 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/morm/5?lang=eng', completed: false },
  { date: '12/14/2023', assignment: [{ book: 'Mormon', chapter: 6 }, { book: 'Mormon', chapter: 7 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/morm/6?lang=eng', completed: false },
  { date: '12/15/2023', assignment: [{ book: 'Mormon', chapter: 8 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/morm/8?lang=eng', completed: false },
  { date: '12/16/2023', assignment: [{ book: 'Mormon', chapter: 9 }, { book: 'Ether', chapter: 1 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/morm/9?lang=eng', completed: false },
  { date: '12/17/2023', assignment: [{ book: 'Ether', chapter: 2 }, { book: 'Ether', chapter: 3 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/ether/2?lang=eng', completed: false },
  { date: '12/18/2023', assignment: [{ book: 'Ether', chapter: 4 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/ether/4?lang=eng', completed: false },
  { date: '12/19/2023', assignment: [{ book: 'Ether', chapter: 5 }, { book: 'Ether', chapter: 6 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/ether/5?lang=eng', completed: false },
  { date: '12/20/2023', assignment: [{ book: 'Ether', chapter: 7 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/ether/7?lang=eng', completed: false },
  { date: '12/21/2023', assignment: [{ book: 'Ether', chapter: 8 }, { book: 'Ether', chapter: 9 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/ether/8?lang=eng', completed: false },
  { date: '12/22/2023', assignment: [{ book: 'Ether', chapter: 10 }, { book: 'Ether', chapter: 11 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/ether/10?lang=eng', completed: false },
  { date: '12/23/2023', assignment: [{ book: 'Ether', chapter: 12 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/ether/12?lang=eng', completed: false },
  { date: '12/24/2023', assignment: [{ book: 'Ether', chapter: 13 }, { book: 'Ether', chapter: 14 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/ether/13?lang=eng', completed: false },
  { date: '12/25/2023', assignment: [{ book: 'Ether', chapter: 15 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/ether/15?lang=eng', completed: false },
  { date: '12/26/2023', assignment: [{ book: 'Moroni', chapter: 1 }, { book: 'Moroni', chapter: 2 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/moro/1?lang=eng', completed: false },
  { date: '12/27/2023', assignment: [{ book: 'Moroni', chapter: 3 }, { book: 'Moroni', chapter: 4 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/moro/3?lang=eng', completed: false },
  { date: '12/28/2023', assignment: [{ book: 'Moroni', chapter: 5 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/moro/5?lang=eng', completed: false },
  { date: '12/29/2023', assignment: [{ book: 'Moroni', chapter: 6 }, { book: 'Moroni', chapter: 7 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/moro/6?lang=eng', completed: false },
  { date: '12/30/2023', assignment: [{ book: 'Moroni', chapter: 8 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/moro/8?lang=eng', completed: false },
  { date: '12/31/2023', assignment: [{ book: 'Moroni', chapter: 9 }, { book: 'Moroni', chapter: 10 }], href: 'https://www.churchofjesuschrist.org/study/scriptures/bofm/moro/9?lang=eng', completed: false }
])

const todayFormatted = () => {
  const d = new Date()
  const month = d.getMonth() + 1 // getMonth() returns 0-11, so add 1 to get 1-12
  const day = d.getDate()
  const year = d.getFullYear()

  return `${month}/${day}/${year}`
}
const isToday = (d: string) => {
  const formattedToday = todayFormatted()
  return formattedToday === d
}
const updateLocalStorage = () => {
  localStorage['bom'] = JSON.stringify(assignments.value)
}

onMounted(() => {
  if (!localStorage['bom']) {
    updateLocalStorage()
  } else {
    assignments.value = JSON.parse(localStorage['bom'])
  }
  const today = document.getElementById(`date-${todayFormatted()}`)
  if (today) {
    today.scrollIntoView()
  }
})
</script>

<template>
  <div class="w-full flex-grow overflow-y-scroll px-4 pb-4">
      <div class="w-full sm:w-1/2 sm:mx-auto">
        <div class="flex justify-between border-b px-3 pb-2 border-neutral-400 sticky top-0 bg-[var(--color-background);]">
          <div class="font-bold text-left mr-4 w-[38px]">Done</div>
          <div class="font-bold flex-1 text-left">Date</div>
          <div class="font-bold flex-2 text-right">Daily Assignment</div>
        </div>
        <div class="max-h-fit scroll-smooth">
          <div
            :id="`date-${assignment.date}`"
            v-for="assignment in assignments"
            :key="assignment.date"
            class="flex justify-between items-center px-3 py-2 border-t dark:border-neutral-700 scroll-my-10"
            :class="{
              'dark:bg-black bg-slate-300': isToday(assignment.date) && !assignment.completed,
              'bg-green-400 dark:bg-green-900 line-through': assignment.completed
            }"
          >
            <div class="font-bold text-left mr-4 w-[38px] flex justify-center pt-[3px]">
              <input
                type="checkbox"
                v-model="assignment.completed"
                class="h-4 w-4 rounded border-neutral-300 text-green-700 focus:ring-green-700 dark:bg-inherit dark:border-neutral-700 dark:focus:ring-offset-neutral-900" 
                :class="{ 'dark:focus:ring-offset-green-900 focus:ring-offset-green-400': assignment.completed }"
                @change="updateLocalStorage"
              >
            </div>
            <div class="flex-1 text-left">{{ assignment.date }}</div>
            <a :href="assignment.href" class="flex-2 text-right cursor-pointer">
              <div class="">
                {{ assignment.assignment[0].book }} {{ assignment.assignment[0].chapter > 0 ? assignment.assignment[0].chapter : '' }}
                <span v-if="assignment.assignment[1] && assignment.assignment[0].book === assignment.assignment[1].book">
                  {{ `-${assignment.assignment[1].chapter}` }}
                </span>
              </div>
              <div v-if="assignment.assignment[1] && assignment.assignment[0].book !== assignment.assignment[1].book" class="">
                {{ assignment.assignment[1].book }} {{ assignment.assignment[1].chapter > 0 ? assignment.assignment[1].chapter : '' }}
              </div>
            </a>
          </div>
        </div>  
      </div>
    </div>
</template>
