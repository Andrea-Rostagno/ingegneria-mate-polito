---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: [Fermat's factorization method, Fermat factorization, metodo di fattorizzazione di Fermat, attacco a RSA con primi vicini, attacco del primo comune, common prime attack, fattorizzazione del modulo RSA]
tags: [competenza, area/informatica]
---

# Fattorizzazione di Fermat

> Metodo che fattorizza $n=pq$ in fretta quando $p$ e $q$ sono vicini, scrivendo $n$ come differenza di due quadrati. È il primo degli attacchi a RSA basati sulla fattorizzazione del modulo.

## Definizione / enunciato
**Idea** (`200521_03LPYOV_RSA_attacks_Python.pdf` p. 7): se $p$ e $q$ sono vicini, si scrive $p=a+b$ e $q=a-b$ con $b$ piccolo, e allora $n$ è una differenza di due quadrati.

**Algoritmo:**
1. parte da $a=\lceil\sqrt n\rceil$, che nel codice è `isqrt(n)`;
2. a ogni passo incrementa $a$ e ricalcola $b^2=a^2-n$;
3. si ferma quando $a^2-n$ è un quadrato perfetto $b^2$;
4. restituisce $p=a+b$ e $q=a-b$.

## Formule chiave
$$n=pq=(a+b)(a-b)=a^2-b^2,\qquad a^2-n=b^2$$

**Contesto: rompere RSA fattorizzando** (`200521_03LPYOV_RSA_attacks_Python.pdf` p. 6; `Critto8.pdf` p. 14). Da $p,q$ si ricava $\varphi(n)$ e quindi $d=e^{-1}\bmod\varphi(n)$. Il viceversa vale: da $N$ e $\varphi(N)$ si ricavano $p$ e $q$ come radici di
$$z^2-(N-\varphi(N)+1)\,z+N=0.$$

## Intuizione
Il numero di iterazioni dipende da quanto $(p+q)/2$ dista da $\sqrt n$. Se $p$ e $q$ sono generati in modo indipendente questa distanza è enorme. Se invece $q$ è il primo successivo a $p+\delta$ con $\delta$ piccolo, bastano pochi passi.

## Come si usa
**Codice d'esempio** (`AY2021/attacks/RSA/fermat_factorization.py`):
- si generano un primo $p_1$ di 400 bit e $p_2$ = `next_prime(p1+delta)`, con $\delta$ primo di 220 bit;
- `fermat(n)` itera con `isqrt` finché `b2 == pow(b,2)`.

**Attacco del primo comune**, nello stesso gruppo di attacchi (p. 8): se $n_1=p_1p_2$ e $n_2=p_1p_3$, allora $\gcd(n_1,n_2)=p_1$ si calcola subito con l'algoritmo di Euclide.

**Altri strumenti** (p. 6):
- factorDB, per numeri piccoli o con fattorizzazione già nota;
- General Number Field Sieve (yafu), per i casi generali.

Bazzanella (`Critto8.pdf` p. 17) cita i primi "forti" ($p-1$ e $p+1$ con un fattore primo grande). Secondo Rivest-Silverman migliorano la sicurezza solo marginalmente.

## Nei corsi
- **Crittografia** (magistrale), parte di laboratorio (Basile): attacchi a RSA in Python. Fonti:
  - `magistrale/Crittografia/Slide/presentations/presentations/200521_03LPYOV_RSA_attacks_Python.pdf` (pp. 6-8);
  - `magistrale/Crittografia/Slide/slide crittografia italiano/slide critto italiano/Critto8.pdf` (pp. 12-17);
  - codice: `magistrale/Crittografia/Repository GitHub/cryptography-03lpyov-exercises/AY2021/attacks/RSA/fermat_factorization.py`.

## Prerequisiti
- [[RSA]]: la sicurezza poggia sulla difficoltà di fattorizzare $N$
- [[Teorema fondamentale dell'aritmetica]]: unicità della fattorizzazione di $n$
- [[Algoritmo di Euclide]]: base dell'attacco del primo comune

## Porta a
- Nessuno.

## Collegati
- [[Funzione phi di Eulero]]: conoscere $\varphi(N)$ equivale a fattorizzare $N$
- [[Attacco del modulo comune]]: altro attacco al modo in cui si generano le chiavi
- [[Crittosistema di Rabin]]: qui rompere il cifrario equivale alla fattorizzazione
