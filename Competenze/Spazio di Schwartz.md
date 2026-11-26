---
tipo: competenza
area: analisi
corsi: [Metodi matematici e probabilità]
livello: [triennale]
aliases: ["Schwartz space", "S(R)", "funzioni rapidamente decrescenti", "rapidly decreasing functions", "funzioni a decrescenza rapida"]
tags: [competenza, area/analisi]
---

# Spazio di Schwartz

> Lo spazio $\mathcal S(\mathbb R)$ delle funzioni $C^\infty$ che, con tutte le derivate, decadono più velocemente di ogni potenza: la trasformata di Fourier lo manda in sé e scambia derivazione e moltiplicazione per $t$.

## Definizione / enunciato
**Definizione 5.10.** $\varphi:\mathbb R\to\mathbb C$ è **rapidamente decrescente** se $\varphi\in C^\infty(\mathbb R)$ e
$$\lim_{t\to\pm\infty}t^p\varphi^{(q)}(t)=0\qquad\forall p,q\in\mathbb N.$$
$\varphi_n\to\varphi$ in $\mathcal S$ se $t^p\varphi_n^{(q)}\to t^p\varphi^{(q)}$ uniformemente su $\mathbb R$ per ogni $p,q$.
Esempi: $e^{-t^2}$; ogni funzione test, cioè $\mathcal D(\mathbb R)\subset\mathcal S(\mathbb R)$. Ogni $\varphi\in\mathcal S$ è sommabile (con $p=2$, $q=0$: $|\varphi(t)|\le1/t^2$ per $|t|$ grande).

## Formule chiave
**Proposizione 5.11.** Se $\varphi\in\mathcal S$:
$$\text{(i) }[\mathcal F(\varphi)]^{(p)}(\nu)=(-2\pi i)^p\mathcal F(t^p\varphi(t))(\nu),\qquad \text{(ii) }\mathcal F(\varphi^{(p)})(\nu)=(2\pi i)^p\nu^p\mathcal F(\varphi)(\nu),$$
(iii) $\mathcal F(\varphi)\in\mathcal S$; (iv) $\varphi_n\to\varphi$ in $\mathcal S\Rightarrow\mathcal F(\varphi_n)\to\mathcal F(\varphi)$.

## Intuizione
Regolarità di $\varphi$ $\leftrightarrow$ decadimento di $\hat\varphi$ e viceversa: (i) e (ii) dicono che derivare da una parte equivale a moltiplicare per un polinomio dall'altra. In $\mathcal S$ entrambe le proprietà valgono insieme, perciò lo spazio è stabile.

## Come si usa
È lo spazio delle funzioni test per le distribuzioni temperate: $\mathcal D$ non va bene perché $\mathcal F(\varphi)$ di una $\varphi\in\mathcal D$ non ha supporto compatto. Il Lemma 5.18 (ogni $\varphi\in\mathcal S$ è limite in $\mathcal S$ di funzioni di $\mathcal D$) permette di vedere le temperate come distribuzioni.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): §5.3 "Trasformata di funzioni rapidamente decrescenti". Fonte: `triennale/ANNO 2/metodi matematici & probabilità/Capitolo 5 (3).pdf` (pp. 6-9 del PDF).

## Prerequisiti
- [[Funzioni test]]: $\mathcal D$ contenuto in $\mathcal S$
- [[Trasformata di Fourier]]: $\mathcal S$ è stabile per $\mathcal F$

## Porta a
- [[Formula di inversione di Fourier]]: inversione in $\mathcal S$
- [[Distribuzioni temperate]]: funzionali lineari continui su $\mathcal S$

## Collegati
- Nessuno.
