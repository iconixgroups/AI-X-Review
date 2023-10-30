```python
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.preprocessing import MultiLabelBinarizer
from sklearn.multiclass import OneVsRestClassifier
from sklearn.svm import LinearSVC
from sklearn.pipeline import Pipeline
import pandas as pd

class NLPModel:
    def __init__(self):
        self.categories = ['NLP', 'Computer Vision', 'Predictions', 'Recommendations']
        self.model = self.build_model()

    def build_model(self):
        pipeline = Pipeline([
            ('tfidf', TfidfVectorizer(stop_words='english')),
            ('clf', OneVsRestClassifier(LinearSVC(), n_jobs=1)),
        ])
        return pipeline

    def train(self, data):
        train_data = pd.DataFrame(data, columns=['description', 'category'])
        X_train = train_data['description']
        y_train_text = train_data['category']

        mlb = MultiLabelBinarizer(classes=self.categories)
        y_train = mlb.fit_transform(y_train_text)

        self.model.fit(X_train, y_train)

    def categorize_product(self, description):
        predicted = self.model.predict([description])
        mlb = MultiLabelBinarizer(classes=self.categories)
        return mlb.inverse_transform(predicted)
```