---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["Riemann integral", "somme inferiori", "somme superiori", "partizione", "integrabilità secondo Riemann", "sottografico"]
tags: [competenza, area/analisi]
---

# Integrale di Riemann

> L'integrale di una funzione limitata su $[a,b]$ è il valore comune del sup delle somme inferiori e dell'inf delle somme superiori, quando coincidono: generalizza l'area del sottografico.

## Definizione / enunciato
Sia $f:[a,b]\to\mathbb R$ limitata e $\mathcal P=\{a=x_0<x_1<\dots<x_n=b\}$ una partizione. Le **somme inferiore e superiore** sono (Morandotti, def. 5.1.4)
$$s(f,\mathcal P)=\sum_{i=1}^n\Big(\inf_{[x_{i-1},x_i]}f\Big)(x_i-x_{i-1}),\qquad S(f,\mathcal P)=\sum_{i=1}^n\Big(\sup_{[x_{i-1},x_i]}f\Big)(x_i-x_{i-1}),$$
con $s(f,\mathcal P)\le S(f,\mathcal P)$. Raffinando la partizione le somme inferiori crescono e le superiori decrescono (lemma 5.1.5).

**Integrabilità** (def. 5.1.8): posti $s(f)=\sup_{\mathcal P}s(f,\mathcal P)$ e $S(f)=\inf_{\mathcal P}S(f,\mathcal P)$, $f$ è integrabile secondo Riemann se $s(f)=S(f)$ e il valore comune si indica con $\int_a^bf(x)\,dx$.

**Criterio** (prop. 5.1.11): $f$ limitata è integrabile se e solo se $\forall\varepsilon>0\ \exists\delta_\varepsilon>0:\ |\mathcal P|<\delta_\varepsilon\Rightarrow S(f,\mathcal P)-s(f,\mathcal P)<\varepsilon$.

## Formule chiave
$$\int_a^bf(x)\,dx=\sup_{\mathcal P}s(f,\mathcal P)=\inf_{\mathcal P}S(f,\mathcal P)$$

## Intuizione
Si approssima l'area del sottografico con rettangoli dal basso e dall'alto; se l'errore si può rendere piccolo a piacere, l'area è ben definita. Non tutte le funzioni limitate sono integrabili: la funzione di Dirichlet $f_D$ ((1.49) di Morandotti) ristretta a $[0,1]$ ha $s(f_D)=0<1=S(f_D)$, perché ogni intervallino contiene sia razionali sia irrazionali.

## Come si usa
Nella lezione del 06/12/2021 si introduce il problema dell'area del sottografico di $f\ge0$ su $[a,b]$ e la costruzione di Riemann (tra quelle di Cauchy, Riemann e Lebesgue, si studia solo quella di Riemann) con punti $x_0=a<x_1<\dots<x_n=b$. In pratica l'integrale si calcola con il teorema fondamentale, non con le somme; le somme servono per le proprietà e per i metodi numerici. Esercizi tipo: esercitazione 20 (2022-23, "integrali definiti": integrali, aree, funzioni integrali).

## Nei corsi
- **Analisi 1** (triennale): "integrale definito, integrale di Riemann". Teoria della misura e [[Integrale di Lebesgue]] sono citati nella lezione come alternative non trattate. Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (§5.1, def. 5.1.1-5.1.8, prop. 5.1.11, PDF pp. 165-171); `triennale/ANNO 1/analisi 1/Dispense/Dispensa Lussardi.pdf` (cap. 4 §1, p. 70); `triennale/ANNO 1/analisi 1/Lezioni 2021-22 (manoscritte)/Lezione 2021-12-06.pdf` (p. 1). La dispensa Mazzi `Integrali di Riemann.pdf` è una scansione non trascritta.

## Prerequisiti
- [[Estremo superiore e inferiore]]: s(f)=sup, S(f)=inf

## Porta a
- [[Classi di funzioni integrabili]]: criterio S-s<ε
- [[Proprietà dell'integrale definito]]: proprietà delle somme

## Collegati
- [[Formula dei trapezi]]: approssimazione numerica dell'integrale
- [[Centro di massa]]: in Fisica 1 il centro di massa di un corpo continuo è un integrale sulla distribuzione di massa
