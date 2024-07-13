<template>
  <!-- Card Section -->
  <div class="max-w-[85rem] py-10 lg:py-14 mx-auto">
    <!-- Card -->
    <ClientOnly>
      <div class="bg-white rounded-xl p-4 sm:p-7 dark:bg-neutral-900">
        <form>
          <!-- Section Company -->
          <div
            class="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-neutral-700 dark:first:border-transparent"
          >
            <div class="sm:col-span-12">
              <h2
                class="text-3xl mb-5 font-semibold text-gray-800 dark:text-neutral-200"
              >
                Add new Position
              </h2>
            </div>

            <div class="sm:col-span-6">
              <label
                for="af-submit-application-full-name"
                class="inline-block text-xl font-medium text-gray-500 mt-2.5 dark:text-neutral-500"
              >
                Position name
              </label>
              <div class="sm:flex mt-2">
                <input
                  required
                  v-model="TempJob.positionName"
                  :disabled="loading"
                  id="af-submit-application-full-name"
                  type="text"
                  placeholder="e.g. Email Marketing Manager"
                  class="py-2 px-3 pe-11 block w-full border-gray-200 border shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-xl relative focus:z-10 focus:border- blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                />
              </div>
            </div>

            <div class="sm:col-span-6">
              <label
                for="af-submit-application-full-name"
                class="inline-block text-xl font-medium text-gray-500 mt-2.5 dark:text-neutral-500"
              >
                Department
              </label>
              <div class="sm:flex mt-2">
                <select
                  required
                  v-model="TempJob.department"
                  :disabled="loading"
                  class="py-2 px-3 pe-9 block w-full border-gray-200 border shadow-sm text-xl rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                >
                  <option selected>Social Media</option>
                  <option>PR</option>
                  <option>eCommerce</option>
                  <option>SEO</option>
                  <option>Performance</option>
                  <option>Content</option>
                  <option>Graphic</option>
                  <option>Ads</option>
                  <option>Automation</option>
                  <option>Email Marketing</option>
                  <option>CRM</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div class="sm:col-span-6">
              <label
                for="af-submit-application-full-name"
                class="inline-block text-xl font-medium text-gray-500 mt-2.5 dark:text-neutral-500"
              >
                Experience
              </label>
              <div class="sm:flex mt-2">
                <select
                  required
                  v-model="TempJob.experience"
                  :disabled="loading"
                  class="py-2 px-3 pe-9 block w-full border-gray-200 border shadow-sm text-xl rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                >
                  <option selected>Internship</option>
                  <option>Specialist</option>
                  <option>Manager</option>
                  <option>Director</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div class="sm:col-span-6">
              <label
                for="af-submit-application-full-name"
                class="inline-block text-xl font-medium text-gray-500 mt-2.5 dark:text-neutral-500"
              >
                Employment Type
              </label>
              <div class="sm:flex mt-2">
                <select
                  required
                  v-model="TempJob.employment"
                  :disabled="loading"
                  class="py-2 px-3 pe-9 block w-full border-gray-200 border shadow-sm text-xl rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                >
                  <option selected>Full time</option>
                  <option>Part time</option>
                  <option>Contract</option>
                  <option>Freelance</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div class="sm:col-span-12">
              <label
                for="af-submit-application-full-name"
                class="inline-block text-xl font-medium text-gray-500 mt-2.5 dark:text-neutral-500"
              >
                Salary
              </label>
              <div class="sm:flex mt-2">
                <input
                  required
                  v-model="TempJob.minSalary"
                  :disabled="loading"
                  id="af-submit-application-full-name"
                  type="text"
                  placeholder="min salary"
                  class="py-2 px-3 pe-11 block w-full border-gray-200 border shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-xl relative focus:z-10 focus:border- blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 mr-2"
                />
                -
                <input
                  required
                  v-model="TempJob.maxSalary"
                  :disabled="loading"
                  id="af-submit-application-full-name"
                  type="text"
                  placeholder="max salary"
                  class="py-2 px-3 pe-11 block w-full border-gray-200 border shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-xl relative focus:z-10 focus:border- blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 ml-2"
                />
              </div>
            </div>

            <div class="sm:col-span-12">
              <label
                for="af-submit-application-full-name"
                class="inline-block text-xl font-medium text-gray-500 mt-2.5 dark:text-neutral-500"
              >
                Apply Link
              </label>
              <div class="sm:flex mt-2">
                <input
                  v-model="TempJob.applyLink"
                  :disabled="loading"
                  id="af-submit-application-full-name"
                  type="url"
                  placeholder="Link to recruitment page"
                  class="py-2 px-3 pe-11 block w-full border-gray-200 border shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-xl relative focus:z-10 focus:border- blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                />
              </div>
            </div>

            <div class="sm:col-span-12">
              <label
                for="af-submit-application-full-name"
                class="inline-block text-xl font-medium text-gray-500 mt-2.5 dark:text-neutral-500"
              >
                Description
              </label>
              <div class="sm:flex mt-2">
                <textarea
                  required
                  v-model="TempJob.desc"
                  :disabled="loading"
                  id="af-submit-application-bio"
                  class="border py-2 px-3 block w-full border-gray-200 rounded-lg text-xl focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  rows="6"
                  placeholder="Add a cover letter or anything else you want to share."
                ></textarea>
              </div>
            </div>
          </div>

          <button
            v-if="!isJobCreated"
            @click.prevent="newOffer()"
            :disabled="loading"
            type="button"
            class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-lead-red text-white bg-red-700 hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none"
          >
            <div
              v-if="loading"
              class="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-white rounded-full dark:text-white"
              role="status"
              aria-label="loading"
            >
              <span class="sr-only">Loading...</span>
            </div>

            <span v-else>Submit offer</span>
          </button>
          <button
            v-else
            @click="paddleCheckout()"
            type="button"
            class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-lead-red text-white bg-red-700 hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none"
          >
            <div
              v-if="loading"
              class="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-white rounded-full dark:text-white"
              role="status"
              aria-label="loading"
            >
              <span class="sr-only">Loading...</span>
            </div>

            <span v-else>Pay Now</span>
          </button>
        </form>
      </div>
    </ClientOnly>
    <!-- End Card -->
  </div>
  <!-- End Card Section -->
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useTempJobStore } from "@/store/tempJobs"; // Upewnij się, że ścieżka jest poprawna
import { useRouter } from "vue-router";
import { useUserStore } from '@/store/user';

const router = useRouter();
const loading = ref(false);
const isJobCreated = ref(false);
const jobId = ref(null);
const error = ref("");
const userStore = useUserStore();

const TempJob = useTempJobStore();

const newOffer = async () => {
  try {
    // await paddleCheckout();
    // return;
    loading.value = true
    jobId.value = await TempJob.addDraft();
    isJobCreated.value = true;
    loading.value = false
  } catch (err) {
    loading.value = false
    error.value = err.message;
  }
};

const paddleCheckout = async () => {
  try {
    // let user = JSON.parse(localStorage.getItem("user"));

    console.log("check...", userStore.$state.user, jobId.value);
    if (userStore.$state.user && jobId.value) {
      const config = useRuntimeConfig();
      console.log("config ... ", config.public);
      Paddle.Checkout.open({
        items: [
          {
            priceId: config.public.paddlePriceId,
            quantity: 1,
          },
        ],
        customData: {
          user_id: userStore.$state.user.$id,
          user_email: userStore.$state.user.email,
          jobId: jobId.value
          // tempJob: TempJob,
        },
      });
    }
  } catch (err) {
    error.value = err.message;
  }
};

onMounted(() => {
  const config = useRuntimeConfig();
  // Paddle.Environment.set('sandbox');
  // Paddle.Setup({ vendor: parseInt(config.public.paddleVendorId) });
});

const items = [
  {
    product_id: "pro_01j18j1st3wqy84bnzg1zyzez5", // Produkt ID zamiast priceId
    quantity: 1,
  },
];

const customerInfo = {
  email: "sam@example.com",
  country: "US",
  postcode: "10021",
};

const openCheckout = () => {
  if (typeof window !== "undefined" && window.Paddle) {
    window.Paddle.Checkout.open({
      items: items,
      customer: customerInfo,
      successCallback: (data) => {
        console.log("Paddle success callback data:", data);
        // Możesz tutaj obsłużyć sukces transakcji
      },
      closeCallback: () => {
        console.log("Paddle checkout closed");
        // Możesz tutaj obsłużyć zamknięcie checkoutu
      },
    });
  } else {
    console.error("Paddle nie jest zainicjalizowany.");
  }
};
</script>

<style>
.ql-toolbar.ql-snow {
  border: none;
}

.ql-container.ql-snow {
  border: none;
  font-size: 18px;
  padding-top: 20px;
  line-height: 22px;
}

.ql-editor {
  line-height: 1.83;
}

.ql-tooltip .ql-hidden {
  display: none;
}
</style>
